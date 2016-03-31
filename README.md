Doku Shop API

# Setup
## Database
1. create a database 'dokushop_db' in your mysql server
2. use the structure and user grants in database/db.sql
> mysql -u[admin_name] -p[admin_pwd] < database/db.sql
3. set the DATABASE host and port in node_server/server.js accordingly
## Server base setup
1. set the port in "BASE SETUP" in node_server/server.js
2. run the server
> cd node_server
> node server.js
