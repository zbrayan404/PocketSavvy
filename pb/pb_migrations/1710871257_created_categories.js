/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fwcqa6x9iv20lef",
    "created": "2024-03-19 18:00:57.338Z",
    "updated": "2024-03-19 18:00:57.338Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sdlihc0q",
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
        "id": "cs3gngmt",
        "name": "name",
        "type": "text",
        "required": true,
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
        "id": "ejzpom5q",
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
  const collection = dao.findCollectionByNameOrId("fwcqa6x9iv20lef");

  return dao.deleteCollection(collection);
})
