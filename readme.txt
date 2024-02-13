About:
template of backend Project Nodejs,Express,MongoDB with server connect, DB connect, all Express initalized and exception handlers. 

plugins that need to install on VS Code: 
1)DotENV
2)ESLint
3)Prettier- Code formatter

need to make config.env File on root folder and fill this variables:
1)NODE_ENV=there is two options ['development','production']
2)PORT=the port to on it the server
3)DB=the connection string of mongodb on this way mongodb+srv://mongodbuser:<PASSWORD>@cluster/<DB_NAME>?retryWrites=true&w=majority
4)DB_NAME=the DB name
5)DB_PASSWORD=the DB password
6)JWT_SECRET=your security string #must be at least 32 chars
7)JWT_EXPIRES_IN=that time you want that jwt will be available #90d 10h 5m 3s
8)EMAIL_USERNAME=your email address 
9)EMAIL_PASSWORD=your email password
10)JWT_COOKIE_EXPIRES_IN=insert number of that days you want to expire (like 90(as 90 days))