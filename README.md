## Based Authenticate with node js , express , and jwt 


>packages
- express
- mongoose 
- express-validator 
- dotenv 
- nodemon 
- jsonwebtoken



### required set environment variables . 

```

.env file here

$ JWT_KEY=your secert
$ DB_ADDRESS= your database addrres
$ DB_PORT= dataabse port 
$ DB_NAME= database name
```


geting started project 
``` 
npm install 

npm run dev 
```

```
auth api : 
POST /api/auth/register
POST /api/auth/login

note: The jwt token is created at login and registration.


note : You must set a header called x-auth-token to go to these paths, otherwise a 403 error will be sent.👇


GET /api/user/
PUT /api/user/update
```
