/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v1873oesasppwxh");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "v1873oesasppwxh",
    "created": "2024-04-09 17:53:13.387Z",
    "updated": "2024-04-09 18:34:29.453Z",
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
      },
      {
        "system": false,
        "id": "mdrcz6hq",
        "name": "name",
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
    "listRule": "",
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
