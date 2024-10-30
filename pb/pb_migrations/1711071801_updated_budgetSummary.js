/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr")

  collection.listRule = "@request.auth.id != \"\" && user.id = @request.auth.id"

  // remove
  collection.schema.removeField("gb7gegdu")

  // remove
  collection.schema.removeField("4hkaqmm3")

  // remove
  collection.schema.removeField("jee0ofrg")

  // remove
  collection.schema.removeField("n16wgyr1")

  // remove
  collection.schema.removeField("4quefduc")

  // remove
  collection.schema.removeField("xsnzbaqc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bophsfyy",
    "name": "user",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sx1hnpe6",
    "name": "category",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fwcqa6x9iv20lef",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u5wmvc8o",
    "name": "budget",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wgb5i8ln",
    "name": "Month",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lr1egk9x",
    "name": "Year",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqkluiz9",
    "name": "amount",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr")

  collection.listRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gb7gegdu",
    "name": "user",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4hkaqmm3",
    "name": "category",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fwcqa6x9iv20lef",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jee0ofrg",
    "name": "budget",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n16wgyr1",
    "name": "Month",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4quefduc",
    "name": "Year",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xsnzbaqc",
    "name": "amount",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("bophsfyy")

  // remove
  collection.schema.removeField("sx1hnpe6")

  // remove
  collection.schema.removeField("u5wmvc8o")

  // remove
  collection.schema.removeField("wgb5i8ln")

  // remove
  collection.schema.removeField("lr1egk9x")

  // remove
  collection.schema.removeField("bqkluiz9")

  return dao.saveCollection(collection)
})
