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