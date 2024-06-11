/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7p2yz49h71dms6g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hqkhlsmm",
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
  const collection = dao.findCollectionByNameOrId("7p2yz49h71dms6g")

  // remove
  collection.schema.removeField("hqkhlsmm")

  return dao.saveCollection(collection)
})
