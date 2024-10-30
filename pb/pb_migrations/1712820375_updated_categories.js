/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwcqa6x9iv20lef")

  collection.listRule = "user.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwcqa6x9iv20lef")

  collection.listRule = "@request.auth.id != \"\" && user.id ?= @request.auth.id"

  return dao.saveCollection(collection)
})
