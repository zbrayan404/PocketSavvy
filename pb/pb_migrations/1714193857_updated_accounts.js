/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("55mqx1khdipg9gy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "18rrgofk",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Checking",
        "Savings",
        "Credit Card",
        "Cash",
        "Investment",
        "Loan",
        "Retirement",
        "Money Market",
        "Certificate of Deposit (CD)",
        "Health Savings (HSA)",
        "Flexible Spending (FSA)",
        "Individual Retirement (IRA)",
        "401(k)",
        "Trust"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("55mqx1khdipg9gy")

  // remove
  collection.schema.removeField("18rrgofk")

  return dao.saveCollection(collection)
})
