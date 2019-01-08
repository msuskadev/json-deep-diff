const jsonComparer = require('./utils/jsonComparer');


// EXAMPLE JSON USED BY json-generator.com

const previousJSON = {
    "_id": "5c352646b4c21bfe2f7f45b0",
    "index": 0,
    "guid": "6f79a93d-2cd1-495d-9b89-333980a60104",
    "isActive": false,
    "balance": "$2,249.40",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "blue",
    "name": "Wilson Mccarty",
    "gender": "male",
    "company": "NIXELT",
    "email": "wilsonmccarty@nixelt.com",
    "phone": "+1 (893) 456-2690",
    "address": "191 Noll Street, Norris, New Jersey, 4118",
    "about": "Proident exercitation incididunt qui irure veniam sunt magna. Culpa proident ipsum pariatur id irure ad. Deserunt exercitation ea id reprehenderit aute adipisicing laboris qui qui reprehenderit dolor tempor elit deserunt. Sunt labore ut sunt esse. Sunt velit est labore qui ut mollit est.\r\n",
    "registered": "2017-06-28T09:26:50 -02:00",
    "latitude": 26.516457,
    "longitude": -108.92137,
    "tags": [
      "aute",
      "nostrud",
      "duis",
      "dolore",
      "deserunt",
      "velit",
      "consectetur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Jeanie Mosley"
      },
      {
        "id": 1,
        "name": "Dale Warren"
      },
      {
        "id": 2,
        "name": "Singleton Spears"
      }
    ],
    "greeting": "Hello, Wilson Mccarty! You have 7 unread messages.",
    "favoriteFruit": "apple"
  };

  const newJSON = {
    "_id": "5c352646b4c21bfe2f7f45b0",
    "index": 0,
    "guid": "6f79a93d-2cd1-495d-9b89-333980a60104",
    "isActive": false,
    "balance": "$3,333.77",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "blue",
    "name": "Wilson Mccarty",
    "gender": "male",
    "company": "NIXELT",
    "noewEmailFiled": "some_email_address@test.com",
    "phone": "+1 (893) 456-2690",
    "address": "191 Noll Street, Norris, New Jersey, 4118",
    "about": "Any clue what to write here",
    "registered": "2017-06-28T09:26:50 -02:00",
    "latitude": 26.516457,
    "longitude": -108.92137,
    "tags": [
      "aute",
      "nostrud",
      "duis",
      "dolore",
      "deserunt",
      "velit",
      "consectetur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Jeanie Mosley"
      },
      {
        "id": 1,
        "name": "Dale Warren"
      },
      {
        "id": 2,
        "name": "Singleton Spears"
      }
    ],
    "greeting": "Hello, Wilson Mccarty! You have 7 unread messages.",
    "favoriteFruit": "apple"
  }; 


  jsonComparer.compare(previousJSON, newJSON);