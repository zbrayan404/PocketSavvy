/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwcqa6x9iv20lef")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqqpweyx",
    "name": "color",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwcqa6x9iv20lef")

  // remove
  collection.schema.removeField("iqqpweyx")

  return dao.saveCollection(collection)
})
