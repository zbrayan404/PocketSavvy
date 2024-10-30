/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr")

  collection.options = {
    "query": "SELECT\n  budgets.user,\n  budgets.id,\n  budgets.category,\n  categories.name AS categoryName,\n  categories.color,\n  categories.type,\n  budgets.amount AS budget,\n  strftime('%m', budgets.endDate) AS Month,\n  strftime('%Y', budgets.endDate) AS Year,\n  COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN categories ON budgets.category = categories.id\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n  budgets.id,\n  categories.name,\n  budgets.category,\n  budgets.amount,\n  budgets.startDate,\n  budgets.endDate;"
  }

  // remove
  collection.schema.removeField("l1mvfhii")

  // remove
  collection.schema.removeField("xzo1sxjb")

  // remove
  collection.schema.removeField("dqgy1joz")

  // remove
  collection.schema.removeField("8xjdguym")

  // remove
  collection.schema.removeField("hbrpzbub")

  // remove
  collection.schema.removeField("8i9hvc2l")

  // remove
  collection.schema.removeField("0urxmnrb")

  // remove
  collection.schema.removeField("gmitlmoo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hf4uvlme",
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
    "id": "okxea2ji",
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
    "id": "oryevjlt",
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
    "id": "furfgvps",
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
    "id": "e9fc8l6v",
    "name": "type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Income",
        "Expenses",
        "Savings"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l1s36zmr",
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
    "id": "qhgbz81c",
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
    "id": "il3hqt0n",
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
    "id": "adkcovxz",
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
    "query": "SELECT\n  budgets.user,\n  budgets.id,\n  categories.name AS categoryName,\n  categories.color,\n  budgets.category,\n  budgets.amount AS budget,\n  strftime('%m', budgets.endDate) AS Month,\n  strftime('%Y', budgets.endDate) AS Year,\n  COALESCE(SUM(transactions.amount), 0) AS amount\nFROM budgets\nLEFT JOIN categories ON budgets.category = categories.id\nLEFT JOIN transactions \n  ON budgets.category = transactions.category\n  AND transactions.date >= budgets.startDate\n  AND transactions.date <= budgets.endDate\n  AND transactions.verify = true\nGROUP BY\n  budgets.id,\n  categories.name,\n  budgets.category,\n  budgets.amount,\n  budgets.startDate,\n  budgets.endDate;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l1mvfhii",
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
    "id": "xzo1sxjb",
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
    "id": "dqgy1joz",
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
    "id": "8xjdguym",
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
    "id": "hbrpzbub",
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
    "id": "8i9hvc2l",
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
    "id": "0urxmnrb",
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
    "id": "gmitlmoo",
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
  collection.schema.removeField("hf4uvlme")

  // remove
  collection.schema.removeField("okxea2ji")

  // remove
  collection.schema.removeField("oryevjlt")

  // remove
  collection.schema.removeField("furfgvps")

  // remove
  collection.schema.removeField("e9fc8l6v")

  // remove
  collection.schema.removeField("l1s36zmr")

  // remove
  collection.schema.removeField("qhgbz81c")

  // remove
  collection.schema.removeField("il3hqt0n")

  // remove
  collection.schema.removeField("adkcovxz")

  return dao.saveCollection(collection)
})
