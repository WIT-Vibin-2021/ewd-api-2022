import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export default {

  init() {
    if (process.env.DATABASE_DIALECT === "mongo") {
      // Connect to database
      mongoose.connect(process.env.DATABASE_URL);
      const db = mongoose.connection;

      db.on('error', (err) => {
        console.log(`database connection error: ${err}`);
      });
      db.on('disconnected', () => {
        console.log('database disconnected');
      });
      db.once('open', () => {
        console.log(`database connected to ${db.name} on ${db.host}`);
        //delete the existing accounts collection if in development mode
        if (process.env.NODE_ENV=="development"){
          db.dropCollection("accounts",function(err, result) {console.log(result)} );
        }
      });
    }

  }
};