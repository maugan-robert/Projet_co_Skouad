/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwftv14k9bt2bvh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "df1exefb",
    "name": "relation_sport",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7p2yz49h71dms6g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwftv14k9bt2bvh")

  // remove
  collection.schema.removeField("df1exefb")

  return dao.saveCollection(collection)
})
