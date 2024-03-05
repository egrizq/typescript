## animal grooming.

### Register animal.
endpoint: POST /animal/register

request body:

```json
{
    "name": "snowbell",
    "age": "2",
    "color": "white",
    "kind": "cat",
    "phone": "0811",
    "owner": "rizq", // unique
}
```

response body(success):
```json
{
    "name": "snowbell",
    "owner": "rizq", // unique
}
```

response body(failed):
```json
{
    "errors": "data should not be blank"
}
```

### register grooming.
endpoint: POST /animal/grooming

request body:
```json
{
    "owner": "rizq", 
    "type": "mandi kutu",
}
```

response body(success):
```json
{
    "name": "snowbell",
    "type": "mandi kutu",
    "datetime": "22-01-2024",
    "queue": "1"
}
```

response body(failed):
```json
{
    "errors": "errors name is not registered yet"
}
```

### update animal.
endpoint: PUT /animal/update/:owner

request body: 
```json
{
    "owner": "rizq",
    "name": "alert",
    "age": "1",
    "color": "black",
    "kind": "dog",
    "phone": "0822",
}
```
 
response body(success):
```json
{
    "name": "alert",
    "age": "1",
    "color": "black",
    "kind": "dog",
    "phone": "0822",
}
```

response body(failed):
```json
{
    "errors": "errors owner is not found"
}
```


### login admin
endpoint: POST /login

request body:
```json
{
    "username": "admin",
    "password": "secret",
    "token": "uuid",
}
```

response body(success):
```json
{
    "status": "login success"
}
```

response body(failed):
```json
{
    "status": "username or password is not found"
}
```

### get all animal
endpoint: GET /animal/data

request header:
- API-TOKEN: token

response body(success):
```json
{
    "owner": "rizq",
    "name": "alert",
    "age": "1",
    "color": "black",
    "kind": "dog",
    "phone": "0822",
}
```

response body(failed):
```json
{
    "errors": "authorized"
}
```