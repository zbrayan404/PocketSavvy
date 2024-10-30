/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr")

  collection.options = {
    "query": "SELECT\n    budgets.id,\n    budgets.category,\n    budgets.amount AS budget,\n    budgets.startDate,\n    budgets.endDate,\n    COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN transactions ON budgets.category = transactions.category\nWHERE transactions.verify = true\nGROUP BY\n    budgets.id,\n    budgets.category,\n    budgets.amount,\n    budgets.startDate,\n    budgets.endDate;"
  }

  // remove
  collection.schema.removeField("hducnmkl")

  // remove
  collection.schema.removeField("kgnyyibo")

  // remove
  collection.schema.removeField("wbmxajzt")

  // remove
  collection.schema.removeField("3ytid9cr")

  // remove
  collection.schema.removeField("3scrczpi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8j0qm6rp",
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
    "id": "uttexhky",
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
    "id": "jsgw59xx",
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
    "id": "q02cgipd",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9zjm0tfs",
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

  collection.options = {
    "query": "SELECT\n    budgets.id,\n    budgets.category,\n    budgets.amount AS budget,\n    budgets.startDate,\n    budgets.endDate,\n    COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN transactions ON budgets.category = transactions.category\nGROUP BY\n    budgets.id,\n    budgets.category,\n    budgets.amount,\n    budgets.startDate,\n    budgets.endDate;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hducnmkl",
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
    "id": "kgnyyibo",
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
    "id": "wbmxajzt",
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
    "id": "3ytid9cr",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3scrczpi",
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
  collection.schema.removeField("8j0qm6rp")

  // remove
  collection.schema.removeField("uttexhky")

  // remove
  collection.schema.removeField("jsgw59xx")

  // remove
  collection.schema.removeField("q02cgipd")

  // remove
  collection.schema.removeField("9zjm0tfs")

  return dao.saveCollection(collection)
})
