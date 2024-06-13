/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lg44pmvznr2ig5c");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "lg44pmvznr2ig5c",
    "created": "2024-06-10 21:30:34.628Z",
    "updated": "2024-06-10 22:10:17.469Z",
    "name": "Utilisateur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "otepiwvi",
        "name": "Prenom",
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
        "id": "5td7uw6b",
        "name": "Nom",
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
        "id": "ld17yan7",
        "name": "Ville",
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
        "id": "hnkgehae",
        "name": "Age",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "uom0hlyz",
        "name": "Description",
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
        "id": "m0wmaubt",
        "name": "Sport_favoris",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 4,
          "values": [
            "Course à pied",
            "Paintball",
            "Fitness",
            "Natation",
            "Vélo",
            "Marche/Randonnée",
            "Ski",
            "Snowboard",
            "Escalade",
            "VTT",
            "Karting"
          ]
        }
      },
      {
        "system": false,
        "id": "wh18xpjq",
        "name": "Photo_de_profil",
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
      },
      {
        "system": false,
        "id": "omhbulj7",
        "name": "Note_attribuee",
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
