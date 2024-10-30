/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "de1r2e7in9d008v",
    "created": "2024-04-25 17:51:08.889Z",
    "updated": "2024-04-25 17:51:08.889Z",
    "name": "reoccuring",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "odat2ifa",
        "name": "user",
        "type": "relation",
        "required": false,
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
        "id": "3iasklxc",
        "name": "account",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "55mqx1khdipg9gy",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "x4dox029",
        "name": "category",
        "type": "relation",
        "required": false,
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
        "id": "cr9dqiyl",
        "name": "payee",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kacmill1",
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
      },
      {
        "system": false,
        "id": "p1rtiqbr",
        "name": "notes",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "avoue0ar",
        "name": "occurance",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Yearly",
            "Montly",
            "Bi-weekly",
            "Weekly"
          ]
        }
      },
      {
        "system": false,
        "id": "grso2olo",
        "name": "payed",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "opgrqb58",
        "name": "startDate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("de1r2e7in9d008v");

  return dao.deleteCollection(collection);
})
