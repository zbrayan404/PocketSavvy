/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1873oesasppwxh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdrcz6hq",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("v1873oesasppwxh")

  // remove
  collection.schema.removeField("mdrcz6hq")

  return dao.saveCollection(collection)
})
