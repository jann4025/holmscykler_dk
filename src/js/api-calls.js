var myHeaders = new Headers();
myHeaders.append('content-type', 'text/plain');
myHeaders.append('Authorization', 'Bearer 4450b4420e2ba67f1939cb8b89b6243a');

var raw =
  '{\n    "content": {\n        "customerid": 791403,\n        "agreedPrice": 0,\n        "id": 495015,\n        "cardno": "1420",\n        "autoincrementno": 1420,\n        "status": "awaiting",\n        "type": "repair",\n        "description": "\\n- Eftersyn\\n- Klinge for\\n- Krans\\n- Kæde",\n        "created": "2019-12-15 13:49:08",\n        "startTime": "2019-12-15 13:49:08",\n        "pickup": "2019-12-15 14:49:08",\n        "draft": 0,\n        "customerarticles": [],\n        "assignee": 1086,\n        "assigneeName": "Jannick Holm",\n        "createByUserId": null,\n        "totalPrice": null,\n        "numComments": 0,\n        "customerarticleids": [],\n        "customer": {\n            "id": 791403,\n            "createddate": "2019-12-13 14:06:29",\n            "name": "Jannick Holm",\n            "phone": "+4522228173",\n            "address": "Valby Langgade 30, 1th",\n            "city": "Valby",\n            "zipcode": "2500",\n            "email": "",\n            "vat": null,\n            "ean": null,\n            "lat": null,\n            "lng": null,\n            "economic_customernumber": null,\n            "note": null,\n            "country": "dk",\n            "draft": 0,\n            "tags": []\n        },\n        "payments": [],\n        "tags": [\n            {\n                "id": 5378,\n                "label": "Forespørgsel fra hjemmeside",\n                "color": "#ff0039"\n            }\n        ],\n        "tagids": [\n            5378\n        ]\n    },\n    "storeid": 634\n}';

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw
};

fetch('https://app.deltateq.com/api/tickets', requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
