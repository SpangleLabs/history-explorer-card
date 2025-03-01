const { HomeAssistant, PlaywrightBrowser } = require('hass-taste-test')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
const { DatabaseSync } = require('node:sqlite');


expect.extend({ toMatchImageSnapshot })

const CONFIGURATION_YAML = `
input_boolean:
  test_bool:
    name: "Example boolean entity"
    initial: True
input_number:
  test_num:
    name: "Example number entity"
    initial: 5
    max: 128
    min: -128
template:
  sensor:
    name: uhoh
    state: unavailable
`

let hass // Global Home Assistant for this test file

beforeAll(async () => {
    hass = await HomeAssistant.create(CONFIGURATION_YAML, {
        browser: new PlaywrightBrowser(process.env.BROWSER || 'firefox'),
        venvDir: "./hasstest-venv",
    })
    // Add your card's JavaScript bundle to Lovelace
    await hass.addResource(__dirname + '/../history-explorer-card.js', 'module')
}, 300000) // 30 second timeout in case Home Assistant needs to install

afterAll(async () => await hass.close())

test('Card embeds without graphs', async () => {
    // Change type to your card type, and add whatever configuration you need
    const dashboard = await hass.Dashboard([
        {
            type: 'custom:history-explorer-card',
            graphs: [],
        },
    ])
    // await hass.callService() is how you can call a service
    expect(await dashboard.cards[0].screenshot()).toMatchImageSnapshot()
})


const fetchEntityMetadataID = function (db, entityID) {
    const query = db.prepare('SELECT metadata_id FROM states_meta WHERE entity_id = ? ORDER BY metadata_id');
    const result = query.get(entityID)
    if (result == null) {
        return null
    }
    return result["metadata_id"]
}

const largestStateID = function (db) {
    const query = db.prepare('SELECT state_id FROM states ORDER BY state_id DESC LIMIT 1');
    const result = query.get()
    if (result == null) {
        return null
    }
    return result["state_id"]
}

const listStatesForEntity = function (db, entityMetadataID) {
    const query = db.prepare('SELECT * FROM states WHERE metadata_id = ?')
    return query.all(entityMetadataID)
}

const previousStateID = function (records, changeTimestamp) {
    let largestRecord = null
    for (let record of records) {
        if (record["last_updated_ts"] > changeTimestamp) {
            continue
        }
        if (largestRecord == null || record["last_updated_ts"] > largestRecord["last_updated_ts"]) {
            largestRecord = record
        }
    }
    return largestRecord?.["state_id"] ?? null
}

const nextStateEntry = function (records, changeTimestamp) {
    let smallestRecord = null
    for (let record of records) {
        if (record["last_updated_ts"] < changeTimestamp) {
            continue
        }
        if (smallestRecord == null || record["last_updated_ts"] < smallestRecord["last_updated_ts"]) {
            smallestRecord = record
        }
    }
    return smallestRecord
}

const previousChangeTS = function (records, changeTimestamp, newState) {
    let largestRecord = null
    for (let record of records) {
        if (record["last_updated_ts"] > changeTimestamp) {
            continue
        }
        if (record["state"] === newState) {
            continue
        }
        if (largestRecord == null || record["last_updated_ts"] > largestRecord["last_updated_ts"]) {
            largestRecord = record
        }
    }
    return largestRecord?.["state_id"] ?? null
}

const nextChangedState = function (records, changeTimestamp, newstate) {
    let smallestRecord = null
    for (let record of records) {

        if (record["last_updated_ts"] < changeTimestamp) {
            continue
        }
        if (record["state"] === newstate) {
            continue
        }
        if (smallestRecord == null || record["last_updated_ts"] < smallestRecord["last_updated_ts"]) {
            smallestRecord = record
        }
    }
    return smallestRecord
}

const insertStateForEntity = function (db, entityMetadataID, newState, changeTimestamp) {
    console.log(`Inserting state entry for entity ID ${entityMetadataID}, timestamp ${changeTimestamp}, state ${newState}`)
    // Determine the next state ID
    const currentStateID = largestStateID(db)
    console.log(`Largest state ID: ${currentStateID}`)
    const newStateID = currentStateID == null ? 1 : currentStateID + 1
    console.log(`New state ID: ${newStateID}`)
    // Fetch all other state entry records for this entity
    const entityStateRecords = listStatesForEntity(db, entityMetadataID)
    // Set old_state_id to the previous state (or null)
    const oldStateID = previousStateID(entityStateRecords, changeTimestamp)
    console.log(`Old state ID: ${oldStateID}`)
    // Find the last time the state changed
    const lastChangedTS = previousChangeTS(entityStateRecords, changeTimestamp, newState)
    console.log(`Last change TS: ${lastChangedTS}`)
    const contextIDBin = "0195335f-cafe-babe-cafe-123456123456" // TODO
    const query = db.prepare(
        'INSERT INTO states (state_id, state, last_changed_ts, last_reported_ts, last_updated_ts, old_state_id, attributes_id, origin_idx, context_id_bin, metadata_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    )
    query.run(newStateID, newState, lastChangedTS, changeTimestamp, changeTimestamp, oldStateID, entityMetadataID, 0, contextIDBin, entityMetadataID)
    // If there is a state after this one, update their old_state_id
    const nextState = nextStateEntry(entityStateRecords, changeTimestamp)
    console.log(`Next state: ${JSON.stringify(nextState)}`)
    if (nextState != null) {
        const nextQuery = db.prepare('UPDATE states SET old_state_id = ? WHERE state_id = ?')
        nextQuery.run(newStateID, nextState["state_id"])
    }
    // If there is a changed state after this one, update their last_changed_ts
    let prevChangesTS = changeTimestamp
    let nextChange = nextChangedState(entityStateRecords, prevChangesTS, newState)
    while (nextChange != null) {
        console.log(`Next change: ${JSON.stringify(nextChange)}`)
        const nextChangeQuery = db.prepare('UPDATE states SET last_changed_ts = ? WHERE state_id = ?')
        nextChangeQuery.run(prevChangesTS, nextChange["state_id"])
        // And check for another
        prevChangesTS = nextChange["last_updated_ts"]
        nextChange = nextChangedState(entityStateRecords, prevChangesTS, nextChange["state"])
    }
}


test('SQLite injection', async () => {
    console.log("Database path: " + hass.configDir + '/home-assistant_v2.db')
    const database = new DatabaseSync(hass.configDir + '/home-assistant_v2.db');
    const query = database.prepare('SELECT * FROM states_meta ORDER BY metadata_id');
    // Execute the prepared statement and log the result set.eeeoy
    console.log(query.all());
    database.close();
})


test('Card embeds with numeric data', async () => {
    // Tell me where this thing lives
    console.log("AAAAAA");
    console.log(hass.path_wwwDir());
    console.log("BBBBBBB");
    const database = new DatabaseSync(hass.configDir + '/home-assistant_v2.db');
    const entityMetadataID = fetchEntityMetadataID(database, "input_number.test_num")
    const now = Date.now() / 1000
    const back6hours = now - (6 * 3600)
    const back12hours = now - (12 * 3600)
    // Set up data
    insertStateForEntity(database, entityMetadataID, 7, back12hours)
    insertStateForEntity(database, entityMetadataID, 10, back6hours)


    // Change type to your card type, and add whatever configuration you need
    const dashboard = await hass.Dashboard([
        {
            type: 'custom:history-explorer-card',
            //defaultTimeRange: '15m',
            graphs: [
                {
                    entities: [
                        {
                            entity: 'input_number.test_num',
                        }
                    ],
                }
            ],
        },
    ])
    console.log(listStatesForEntity(database, entityMetadataID))
    console.log(await dashboard.link()) // Print dashboard url
    await dashboard.openInBrowser()
    await new Promise((resolve) => setTimeout(resolve, 500000)) // Wait 500 seconds

    // await hass.callService() is how you can call a service
    expect(await dashboard.cards[0].screenshot()).toMatchImageSnapshot()
}, 120000)

/*
test('Card embeds with boolean data', async () => {})
unused_func = async () => {
    // Setting up some data
    //await new Promise((resolve) => setTimeout(resolve, 50000)) // Wait 50 seconds
    //await hass.callService('input_boolean', 'toggle', {}, { entity_id: "input_boolean.test_bool" });
    //await new Promise((resolve) => setTimeout(resolve, 50000)) // Wait 50 seconds


    // Change type to your card type, and add whatever configuration you need
    const dashboard = await hass.Dashboard([
        {
            type: 'custom:history-explorer-card',
            defaultTimeRange: '15m',
            graphs: [
                {
                    entities: [
                        {
                            entity: 'input_boolean.test_bool',
                        }
                    ],
                }
            ],
        },
    ])
    // await hass.callService() is how you can call a service
    expect(await dashboard.cards[0].screenshot()).toMatchImageSnapshot()
}*/
