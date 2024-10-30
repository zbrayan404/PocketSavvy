/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr")

  collection.options = {
    "query": "SELECT\n  budgets.user,\n  budgets.id,\n  categories.name AS category_name,\n  budgets.category,\n  budgets.amount AS budget,\n  strftime('%m', budgets.endDate) AS Month,\n  strftime('%Y', budgets.endDate) AS Year,\n  COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN categories ON budgets.category = categories.id\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n  budgets.id,\n  categories.name,\n  budgets.category,\n  budgets.amount,\n  budgets.startDate,\n  budgets.endDate;"
  }

  // remove
  collection.schema.removeField("0yetxnvh")

  // remove
  collection.schema.removeField("mzvsicyk")

  // remove
  collection.schema.removeField("igebcgka")

  // remove
  collection.schema.removeField("tv1xoela")

  // remove
  collection.schema.removeField("khp4vfov")

  // remove
  collection.schema.removeField("b2ussdle")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p2jsiajg",
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
    "id": "l4qnjx4m",
    "name": "category_name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nyql98a0",
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
    "id": "crdtamd8",
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
    "id": "z22kjqwr",
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
    "id": "0ddargaa",
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
    "id": "qef30pvn",
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
    "query": "SELECT\n  budgets.user,\n  budgets.id,\n  budgets.category,\n  budgets.amount AS budget,\n  strftime('%m', budgets.endDate) AS Month,\n  strftime('%Y', budgets.endDate) AS Year,\n  COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n    budgets.id,\n    budgets.category,\n    budgets.amount,\n    budgets.startDate,\n    budgets.endDate;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0yetxnvh",
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
    "id": "mzvsicyk",
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
    "id": "igebcgka",
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
    "id": "tv1xoela",
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
    "id": "khp4vfov",
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
    "id": "b2ussdle",
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
  collection.schema.removeField("p2jsiajg")

  // remove
  collection.schema.removeField("l4qnjx4m")

  // remove
  collection.schema.removeField("nyql98a0")

  // remove
  collection.schema.removeField("crdtamd8")

  // remove
  collection.schema.removeField("z22kjqwr")

  // remove
  collection.schema.removeField("0ddargaa")

  // remove
  collection.schema.removeField("qef30pvn")

  return dao.saveCollection(collection)
})
