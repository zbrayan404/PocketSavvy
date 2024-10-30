/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v1873oesasppwxh",
    "created": "2024-04-09 17:53:13.387Z",
    "updated": "2024-04-09 17:53:13.387Z",
    "name": "avatars",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l4rd3ioj",
        "name": "url",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("v1873oesasppwxh");

  return dao.deleteCollection(collection);
})
