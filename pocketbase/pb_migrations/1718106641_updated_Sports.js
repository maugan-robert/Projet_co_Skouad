/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7p2yz49h71dms6g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nb70o8au",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fwftv14k9bt2bvh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7p2yz49h71dms6g")

  // remove
  collection.schema.removeField("nb70o8au")

  return dao.saveCollection(collection)
})
