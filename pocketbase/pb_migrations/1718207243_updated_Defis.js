/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8t3muu8jouigc4")

  // remove
  collection.schema.removeField("5rsb2gek")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nxpoq73r",
    "name": "Date_de_fin",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8t3muu8jouigc4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5rsb2gek",
    "name": "Date_de_fin",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("nxpoq73r")

  return dao.saveCollection(collection)
})
