/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0y71n2sdvywa5f")

  collection.createRule = "@collection.categories.user.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0y71n2sdvywa5f")

  collection.createRule = null

  return dao.saveCollection(collection)
})
