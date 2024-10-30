/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwcqa6x9iv20lef")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ejzpom5q",
    "name": "type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Income",
        "Expense",
        "Saving"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwcqa6x9iv20lef")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ejzpom5q",
    "name": "type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Income",
        "Expenses",
        "Savings"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
