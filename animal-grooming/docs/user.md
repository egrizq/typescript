### Register user & animal.
endpoint: POST /user/register

request: jwt-token

request body:

```json
{
    "owner": "rizq",
    "phone": "081122",
    "address": "bekasi",
    "animals": [
        {
            "name": "snowbell",
            "age": "2",
            "color": "white",
            "kind": "cat"
        }
    ]
}
```

response body(success):
```json
{
    "data": {
        "name": "rizq",
        "phone": "0811",
    }
}
```

response body(failed):
```json
{
    "errors": "data should not be blank"
}
```

### register new animal.
endpoint: PATCH /user/register/animal

request: jwt-token

request body:
```json
{
    "owner": "rizq", 
    "name": "snowbell",
    "age": "2",
    "color": "white",
    "kind": "cat",
}
```

response body(success):
```json
{
    "data": {
        "owner": "rizq", 
        "name": "snowbell",
        "age": "2",
        "color": "white",
        "kind": "cat",
    }
}
```

response body(failed):
```json
{
    "errors": "errors owner is not found"
}
```

### register for grooming.
endpoint: POST /user/register/grooming

request: jwt-token

request body:
```json
{
    "owner": "rizq", 
    "name": "snowbell",
    "groomingType": "kutu"
}
```

response body(success):
```json
{
    "data": {
        "owner": "rizq", 
        "name": "snowbell",
        "groomingType": "kutu",
        "queue": 1
    }
}
```

response body(failed):
```json
{
    "errors": "owner is not found"
}
```

### get all data
endpoint: GET /user/data

request: jwt-token

response body(success):
```json
{
    "data": [
        {
            "user_id": 1,
            "owner": "rizq",
            "phone": "081122",
            "address": "jkt",
            "animals": [
                {
                    "name": "snowbell",
                    "age": "2",
                    "color": "white",
                    "kind": "cat"
                }
            ]
        }
    ]
}
```

response body(failed):
```json
{
    "errors": "there's no data in record"
}
```

