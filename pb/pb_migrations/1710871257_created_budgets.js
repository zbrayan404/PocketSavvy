/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h0y71n2sdvywa5f",
    "created": "2024-03-19 18:00:57.338Z",
    "updated": "2024-03-19 18:00:57.338Z",
    "name": "budgets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r9yzylrg",
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
      },
      {
        "system": false,
        "id": "kqqnkarx",
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
        "id": "lj6unmnj",
        "name": "month",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
          ]
        }
      },
      {
        "system": false,
        "id": "xdufuowi",
        "name": "year",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1900,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "wntx72sx",
        "name": "amount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h0y71n2sdvywa5f");

  return dao.deleteCollection(collection);
})
