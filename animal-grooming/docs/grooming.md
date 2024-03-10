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

response body(failed):
```json
{
    "error": "there's no queue in record"
}
```

### delete finished grooming data
endpoint: DELETE /grooming/finish/:owner/:name

request: jwt-token

response body(success):
```json
{
    "owner": "rizq",
    "name": "snowbell"
}
```

response body(failed):
```json
{
    "error": "owner or name is not found!"
}
```