/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8t3muu8jouigc4")

  // remove
  collection.schema.removeField("vwojpfxv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8t3muu8jouigc4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vwojpfxv",
    "name": "Categorie",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
