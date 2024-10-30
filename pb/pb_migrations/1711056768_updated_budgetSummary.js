/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr")

  collection.options = {
    "query": "SELECT\n    budgets.id,\n    budgets.category,\n    budgets.amount AS budget,\n    budgets.startDate,\n    budgets.endDate,\n    COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n    budgets.id,\n    budgets.category,\n    budgets.amount,\n    budgets.startDate,\n    budgets.endDate;"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxg1axds",
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
    "id": "2degkurw",
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
    "id": "2rqretqp",
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
    "id": "vzde7yyr",
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
    "id": "nrhxofqy",
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
    "query": "SELECT\n    budgets.id,\n    budgets.category,\n    budgets.amount AS budget,\n    budgets.startDate,\n    budgets.endDate,\n    COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN transactions ON budgets.category = transactions.category\nWHERE transactions.verify = true\nGROUP BY\n    budgets.id,\n    budgets.category,\n    budgets.amount,\n    budgets.startDate,\n    budgets.endDate;"
  }

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

  // remove
  collection.schema.removeField("cxg1axds")

  // remove
  collection.schema.removeField("2degkurw")

  // remove
  collection.schema.removeField("2rqretqp")

  // remove
  collection.schema.removeField("vzde7yyr")

  // remove
  collection.schema.removeField("nrhxofqy")

  return dao.saveCollection(collection)
})
