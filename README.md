# CRUD API

## Overview 🔍
Educational application of CRUD operations

## 🏗️ Install & Run🏃
**Requirements:** Node.js 18.12.1

Clone repository:

```bash
git clone https://github.com/OKuts/Simple-CRUD-API.git
```

Install dependencies:
```bash
yarn
```

Run service:
```bash
    yarn start:dev //development mode of running
    yarn dev:multi //development mode of running, with using balancer  
    
    yarn start:multi //production mode of running 
    yarn start:prod //production mode of running, with using balancer   
```

## API Doc 📚

Service allow to work with ``User`` entity.

### List of API endpoints:

1. `/api/users (GET)` - retrieve all users;
2. `/api/users/:id (GET)` - retrieve user by id;
3. `/api/users (POST)` - create new user;
4. `/api/users/:id (PUT)` - update user info;
5. `/api/users/:id (DELETE)` - delete user;

### Some examples of usage

#### (GET) `/api/users`
Response example:
```json
[
    {
        "id": "5813d139-4b2c-4aac-b623-7ce7bd55f8d4",
        "username": "Aleks",
        "age": 53,
        "hobbies": [
            "js",
            "ts"
        ]
    },
    {
        "id": "6f8cbc02-8a8e-4368-83fe-e0fe6aa8c1db",
        "username": "Petro",
        "age": 18,
        "hobbies": []
    }
]
```

#### (GET) `/api/users/:id`
Response example:
```json
{
    "id": "5813d139-4b2c-4aac-b623-7ce7bd55f8d4",
    "username": "Aleks",
    "age": 53,
    "hobbies": [
        "js",
        "ts"
    ]
}
```

#### (POST) `/api/users` 
Request example:
```json
    {
        "username": "Aleks",
        "age": 53,
        "hobbies": [
            "js",
            "ts"
        ]
    }
```

Response example:
```json
    {
        "id": "5813d139-4b2c-4aac-b623-7ce7bd55f8d4",
        "username": "Aleks",
        "age": 53,
        "hobbies": [
            "js",
            "ts"
        ]
    }
```

#### (PUT) `/api/users/5813d139-4b2c-4aac-b623-7ce7bd55f8d4` 
Request example:
```json
    {
      "username": "Aleks",
      "age": 77,
      "hobbies": [
            "js",
            "c++"
      ]
    }
```

Response example:
```json
    {
      "id": "5813d139-4b2c-4aac-b623-7ce7bd55f8d4",
      "username": "Aleks",
      "age": 77,
      "hobbies": [
            "js",
            "c++"
  ]
}
```

#### (DELETE) `/api/users/:id`  - 204:
