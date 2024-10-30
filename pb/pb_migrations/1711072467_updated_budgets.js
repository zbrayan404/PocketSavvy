/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0y71n2sdvywa5f")

  collection.listRule = "@collection.categories.id ?= category && @collection.categories.user.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0y71n2sdvywa5f")

  collection.listRule = "  @collection.categories.id ?= category && @collection.categories.user.id ?= @request.auth.id"

  return dao.saveCollection(collection)
})
