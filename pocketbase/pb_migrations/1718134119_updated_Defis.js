/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8t3muu8jouigc4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwexeihx",
    "name": "Sports",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Course à pied",
        "Ski",
        "Escalade",
        "Fitness"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "assalc4p",
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
  const collection = dao.findCollectionByNameOrId("a8t3muu8jouigc4")

  // remove
  collection.schema.removeField("dwexeihx")

  // remove
  collection.schema.removeField("assalc4p")

  return dao.saveCollection(collection)
})
