/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("koe4vgqrzi6vvvb")

  collection.createRule = "user.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("koe4vgqrzi6vvvb")

  collection.createRule = null

  return dao.saveCollection(collection)
})
