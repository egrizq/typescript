## RESTful API Animal Grooming.

### register admin
endpoint: POST /admin/create

request body:
```json
{
    "username": "admin",
    "password": "secret",
    "email": "admin@example.com"
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
endpoint: DELETE /admin/logout

request: jwt-token

response body(success):
```json
{
    "status": "Success logout!"
}
```