## RESTful API Animal Grooming.

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
endpoint: POST /user/register/animal

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

### register admin
endpoint: POST /admin/create

request body:
```json
{
    "username": "admin",
    "password": "secret",
}
```

response body(success):
```json
{
    "status": "Account successfully created!"
}
```

response body(failed):
```json
{
    "status": "Username already exist!"
}
```

### login admin
endpoint: POST /admin/login

request body:
```json
{
    "username": "admin",
    "password": "secret",
}
```

response body(success):
```json
{
    "status": "Login success!"
}
```

response body(failed):
```json
{
    "status": "Username or password is wrong!"
}
```

### logout admin
endpoint: GET /admin/logout

response body(success):
```json
{
    "status": "Success logout!"
}
```

### get grooming data
endpoint: GET /grooming/data

request: jwt-token

response body(success):
```json
{
    "data": [
    {
        "owner": "rizq",
        "name": "snowbell",
        "groomingType": "kutu",
        "date": "2024-03-07T03:05:25.109Z",
        "queue": 1
    }, {
        "owner": "syra",
        "name": "groot",
        "groomingType": "kombinasi",
        "date": "2024-03-07T03:05:25.109Z",
        "queue": 2
    }
    ]
}