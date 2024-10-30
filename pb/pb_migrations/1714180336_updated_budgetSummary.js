/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr")

  collection.options = {
    "query": "SELECT\n  budgets.user,\n  budgets.id,\n  budgets.category,\n  categories.name AS categoryName,\n  categories.color,\n  categories.type,\n  budgets.amount AS budget,\n  budgets.startDate,\n  budgets.endDate,\n  strftime('%m', budgets.endDate) AS Month,\n  strftime('%Y', budgets.endDate) AS Year,\n  COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN categories ON budgets.category = categories.id\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n  budgets.id,\n  categories.name,\n  budgets.category,\n  budgets.amount,\n  budgets.startDate,\n  budgets.endDate;"
  }

  // remove
  collection.schema.removeField("li88uzaj")

  // remove
  collection.schema.removeField("s9uvnil8")

  // remove
  collection.schema.removeField("v46awrhb")

  // remove
  collection.schema.removeField("rq2jypel")

  // remove
  collection.schema.removeField("8m6hrzty")

  // remove
  collection.schema.removeField("qf5kqmq6")

  // remove
  collection.schema.removeField("gez1aa1j")

  // remove
  collection.schema.removeField("kyq5yjlz")

  // remove
  collection.schema.removeField("ytobgreh")

  // remove
  collection.schema.removeField("ngirsugg")

  // remove
  collection.schema.removeField("eic08tdm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xiuvkmqh",
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
    "id": "s8h6c2vm",
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
    "id": "k4cefhke",
    "name": "categoryName",
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
    "id": "wda3jkaa",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eczsluzm",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lubytodu",
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
    "id": "ygdhavow",
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
    "id": "ji439fdh",
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
    "id": "vm6ip39k",
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
    "id": "ostnurku",
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
    "id": "sc8ifbxr",
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
    "query": "SELECT\n  budgets.user,\n  budgets.id,\n  budgets.category,\n  categories.name AS categoryName,\n  categories.color,\n  categories.type,\n  budgets.amount AS budget,\n  budgets.startDate,\n  budgets.endDate,\n  strftime('%m', budgets.endDate) AS month,\n  strftime('%Y', budgets.endDate) AS year,\n  COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN categories ON budgets.category = categories.id\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n  budgets.id,\n  categories.name,\n  budgets.category,\n  budgets.amount,\n  budgets.startDate,\n  budgets.endDate;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "li88uzaj",
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
    "id": "s9uvnil8",
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
    "id": "v46awrhb",
    "name": "categoryName",
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
    "id": "rq2jypel",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8m6hrzty",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qf5kqmq6",
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
    "id": "gez1aa1j",
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
    "id": "kyq5yjlz",
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
    "id": "ytobgreh",
    "name": "month",
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
    "id": "ngirsugg",
    "name": "year",
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
    "id": "eic08tdm",
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
  collection.schema.removeField("xiuvkmqh")

  // remove
  collection.schema.removeField("s8h6c2vm")

  // remove
  collection.schema.removeField("k4cefhke")

  // remove
  collection.schema.removeField("wda3jkaa")

  // remove
  collection.schema.removeField("eczsluzm")

  // remove
  collection.schema.removeField("lubytodu")

  // remove
  collection.schema.removeField("ygdhavow")

  // remove
  collection.schema.removeField("ji439fdh")

  // remove
  collection.schema.removeField("vm6ip39k")

  // remove
  collection.schema.removeField("ostnurku")

  // remove
  collection.schema.removeField("sc8ifbxr")

  return dao.saveCollection(collection)
})
