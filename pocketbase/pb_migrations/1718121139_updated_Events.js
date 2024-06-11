/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwftv14k9bt2bvh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x8rasuwh",
    "name": "Image_full",
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
  const collection = dao.findCollectionByNameOrId("fwftv14k9bt2bvh")

  // remove
  collection.schema.removeField("x8rasuwh")

  return dao.saveCollection(collection)
})
