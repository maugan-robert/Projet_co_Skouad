/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7p2yz49h71dms6g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qn1q95c7",
    "name": "favori",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7p2yz49h71dms6g")

  // remove
  collection.schema.removeField("qn1q95c7")

  return dao.saveCollection(collection)
})
