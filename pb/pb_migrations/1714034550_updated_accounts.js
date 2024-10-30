/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("55mqx1khdipg9gy")

  collection.listRule = "user.id ?= @request.auth.id"
  collection.createRule = "user.id ?= @request.auth.id"
  collection.updateRule = "user.id ?= @request.auth.id"
  collection.deleteRule = "user.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("55mqx1khdipg9gy")

  collection.listRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
