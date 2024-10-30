/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0y71n2sdvywa5f")

  // remove
  collection.schema.removeField("lj6unmnj")

  // remove
  collection.schema.removeField("xdufuowi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x4lihqvz",
    "name": "startDate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l208vv9o",
    "name": "endDate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0y71n2sdvywa5f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lj6unmnj",
    "name": "month",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xdufuowi",
    "name": "year",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1900,
      "max": null,
      "noDecimal": true
    }
  }))

  // remove
  collection.schema.removeField("x4lihqvz")

  // remove
  collection.schema.removeField("l208vv9o")

  return dao.saveCollection(collection)
})
