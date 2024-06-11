/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwftv14k9bt2bvh")

  // remove
  collection.schema.removeField("nhtuasju")

  // remove
  collection.schema.removeField("nqtbljre")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ayo5wrp",
    "name": "Categorie",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Fitness",
        "Escalade",
        "Ski",
        "Course à pied"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i83wwpe0",
    "name": "difficulte_event",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Débutant",
        "Amateur",
        "Intermédiaire",
        "Pro",
        "Expert"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwftv14k9bt2bvh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nhtuasju",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nqtbljre",
    "name": "difficulte_event",
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

  // remove
  collection.schema.removeField("2ayo5wrp")

  // remove
  collection.schema.removeField("i83wwpe0")

  return dao.saveCollection(collection)
})
