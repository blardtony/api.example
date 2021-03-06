define({ "api": [
  {
    "type": "get",
    "url": "/me",
    "title": "Afficher l'utilisateur connecté",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token</p>"
          }
        ]
      }
    },
    "name": "GetMe",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "me"
      }
    ],
    "version": "0.0.0",
    "filename": "./index.mjs",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Se connecter",
    "name": "PostLogin",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "body:\n{\n  \"email\": \"user@email.com\",\n  \"password\": \"szjkdjklkjdz\"\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "body/json": [
          {
            "group": "body/json",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "body/json",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "login"
      }
    ],
    "version": "0.0.0",
    "filename": "./index.mjs",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Créer un utilisateur",
    "name": "PostUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "body:\n{\n  \"email\": \"user@email.com\",\n  \"name\": \"User name\",\n  \"password\": \"szjkdjklkjdz\"\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "body/json": [
          {
            "group": "body/json",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "body/json",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "body/json",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "user"
      }
    ],
    "version": "0.0.0",
    "filename": "./index.mjs",
    "groupTitle": "Users"
  }
] });
