/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8t3muu8jouigc4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2pry9yji",
    "name": "description_defis",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y4cebwdx",
    "name": "img_full",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8t3muu8jouigc4")

  // remove
  collection.schema.removeField("2pry9yji")

  // remove
  collection.schema.removeField("y4cebwdx")

  return dao.saveCollection(collection)
})
