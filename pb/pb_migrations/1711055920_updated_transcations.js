/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("koe4vgqrzi6vvvb")

  collection.name = "transactions"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("koe4vgqrzi6vvvb")

  collection.name = "transcations"

  return dao.saveCollection(collection)
})
