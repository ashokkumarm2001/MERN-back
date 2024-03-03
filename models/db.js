const mongoose = require('mongoose');
// require('dotenv').config()
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect( 'mongodb+srv://aneganashok935:5uj6oTJsrhGlrnDD@cluster0.jm6kkg4.mongodb.net/db_test?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false  });

// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));
