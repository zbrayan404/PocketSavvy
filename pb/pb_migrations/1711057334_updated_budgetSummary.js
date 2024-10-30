/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr")

  collection.options = {
    "query": "SELECT\n  budgets.user,\n  budgets.id,\n  budgets.category,\n  budgets.amount AS budget,\n  strftime('%m', budgets.endDate) AS Month,\n  strftime('%Y', budgets.endDate) AS Year,\n  COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n    budgets.id,\n    budgets.category,\n    budgets.amount,\n    budgets.startDate,\n    budgets.endDate;"
  }

  // remove
  collection.schema.removeField("hbcms68k")

  // remove
  collection.schema.removeField("lo3j57wy")

  // remove
  collection.schema.removeField("sscqtu6t")

  // remove
  collection.schema.removeField("m5nzudeq")

  // remove
  collection.schema.removeField("injnuhud")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr")

  collection.options = {
    "query": "SELECT\n    budgets.id,\n    budgets.category,\n    budgets.amount AS budget,\n    strftime('%m', budgets.endDate) AS Month,\n    strftime('%Y', budgets.endDate) AS Year,\n    COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n    budgets.id,\n    budgets.category,\n    budgets.amount,\n    budgets.startDate,\n    budgets.endDate;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hbcms68k",
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
    "id": "lo3j57wy",
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
    "id": "sscqtu6t",
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
    "id": "m5nzudeq",
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
    "id": "injnuhud",
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

  return dao.saveCollection(collection)
})
