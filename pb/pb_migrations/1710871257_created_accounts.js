/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "55mqx1khdipg9gy",
    "created": "2024-03-19 18:00:57.338Z",
    "updated": "2024-03-19 18:00:57.338Z",
    "name": "accounts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uqet6iso",
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
        "id": "pkgsm3jw",
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
  const collection = dao.findCollectionByNameOrId("55mqx1khdipg9gy");

  return dao.deleteCollection(collection);
})
