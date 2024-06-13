/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vth56ejm540za1r");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vth56ejm540za1r",
    "created": "2024-06-10 21:33:45.918Z",
    "updated": "2024-06-11 21:31:36.516Z",
    "name": "Shop",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qpvcha4u",
        "name": "Nom_reduction",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "svr5dpfq",
        "name": "Prix",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
