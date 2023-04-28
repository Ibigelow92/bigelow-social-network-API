const { connect, connection } = require('mongoose');
require ("dotenv").config();

const connectionString =
// The connection string on the right: where do you get it?
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString);

module.exports = connection;

/*If you are using Heroku, you can add your Atlas connection string as a Config Var. 
To do this, go to the Heroku dashboard for your application, click on "Settings", 
and then click on "Config Vars". In the "Config Vars" section, add a new variable called 
"MONGODB_URI" and enter your Atlas connection string in the value field.

If you are not using Heroku, you can generate a connection string from the MongoDB Atlas website. 
To do this, go to the MongoDB Atlas website and log in to your account. Then, click on the "Databases" 
tab and select the database that you want to connect to. In the "Connection Strings" section, click 
on the "Generate" button. This will generate a connection string for you.*/