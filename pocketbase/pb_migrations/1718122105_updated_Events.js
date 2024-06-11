/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwftv14k9bt2bvh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ayo5wrp",
    "name": "Categorie",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Fitness",
        "Escalade",
        "Ski",
        "Course à pied",
        "Karting",
        "Randonnée",
        "Vélo",
        "VTT",
        "Natation",
        "Paintball",
        "Snowboard"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwftv14k9bt2bvh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ayo5wrp",
    "name": "Categorie",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Fitness",
        "Escalade",
        "Ski",
        "Course à pied"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
