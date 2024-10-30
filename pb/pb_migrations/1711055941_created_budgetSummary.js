/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hiuqbgvkc35urjr",
    "created": "2024-03-21 21:19:01.250Z",
    "updated": "2024-03-21 21:19:01.250Z",
    "name": "budgetSummary",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qpwixb3i",
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
      },
      {
        "system": false,
        "id": "cxjz2x4d",
        "name": "BudgetAmount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "7wiqpsih",
        "name": "startDate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "3mibiita",
        "name": "endDate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "uwufi2in",
        "name": "TotalTransactionsAmount",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    budgets.id,\n    budgets.category,\n    budgets.amount AS BudgetAmount,\n    budgets.startDate,\n    budgets.endDate,\n    COALESCE(SUM(transactions.amount), 0) AS TotalTransactionsAmount\nFROM budgets\nLEFT JOIN transactions ON budgets.category = transactions.category\nGROUP BY\n    budgets.id,\n    budgets.category,\n    budgets.amount,\n    budgets.startDate,\n    budgets.endDate;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hiuqbgvkc35urjr");

  return dao.deleteCollection(collection);
})
