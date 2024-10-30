/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr")

  collection.options = {
    "query": "SELECT\n  budgets.user,\n  budgets.id,\n  budgets.category,\n  categories.name AS categoryName,\n  categories.color,\n  categories.type,\n  budgets.amount AS budget,\n  budgets.startDate,\n  budgets.endDate,\n  strftime('%m', budgets.endDate) AS Month,\n  strftime('%Y', budgets.endDate) AS Year,\n  COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN categories ON budgets.category = categories.id\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n  budgets.id,\n  categories.name,\n  budgets.category,\n  budgets.amount,\n  budgets.startDate,\n  budgets.endDate;"
  }

  // remove
  collection.schema.removeField("5abvryhb")

  // remove
  collection.schema.removeField("dddxh85u")

  // remove
  collection.schema.removeField("elj9gcvi")

  // remove
  collection.schema.removeField("cmmahte6")

  // remove
  collection.schema.removeField("8gzkanb5")

  // remove
  collection.schema.removeField("1gvhpsz1")

  // remove
  collection.schema.removeField("ptefexki")

  // remove
  collection.schema.removeField("eqpenlvg")

  // remove
  collection.schema.removeField("4ehn7gpg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a9s5uavy",
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
    "id": "5t211smg",
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
    "id": "p9d0qv4r",
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
    "id": "kma8jgpd",
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
    "id": "wkfiravj",
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
    "id": "2cpoolpg",
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
    "id": "jinsvd7j",
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
    "id": "eb4tuvok",
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
    "id": "uq5kxosj",
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
    "id": "aqpmmtbc",
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
    "id": "rln1nmoz",
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
    "query": "SELECT\n  budgets.user,\n  budgets.id,\n  budgets.category,\n  categories.name AS categoryName,\n  categories.color,\n  categories.type,\n  budgets.amount AS budget,\n  strftime('%m', budgets.endDate) AS Month,\n  strftime('%Y', budgets.endDate) AS Year,\n  COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN categories ON budgets.category = categories.id\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n  budgets.id,\n  categories.name,\n  budgets.category,\n  budgets.amount,\n  budgets.startDate,\n  budgets.endDate;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5abvryhb",
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
    "id": "dddxh85u",
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
    "id": "elj9gcvi",
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
    "id": "cmmahte6",
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
    "id": "8gzkanb5",
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
    "id": "1gvhpsz1",
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
    "id": "ptefexki",
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
    "id": "eqpenlvg",
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
    "id": "4ehn7gpg",
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
  collection.schema.removeField("a9s5uavy")

  // remove
  collection.schema.removeField("5t211smg")

  // remove
  collection.schema.removeField("p9d0qv4r")

  // remove
  collection.schema.removeField("kma8jgpd")

  // remove
  collection.schema.removeField("wkfiravj")

  // remove
  collection.schema.removeField("2cpoolpg")

  // remove
  collection.schema.removeField("jinsvd7j")

  // remove
  collection.schema.removeField("eb4tuvok")

  // remove
  collection.schema.removeField("uq5kxosj")

  // remove
  collection.schema.removeField("aqpmmtbc")

  // remove
  collection.schema.removeField("rln1nmoz")

  return dao.saveCollection(collection)
})
