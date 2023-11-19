// Database connection function
import mongoose, { connect } from 'mongoose';
const DB = process.env.MONGODB_URL
// 
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}
const mongodb = async ()=> {
 
    if (cached.conn) {
        console.log("--- db connected ---");
        return cached.conn
      }
    
      if (!cached.promise) {
        const opts = {
          bufferCommands: false,
        }
    
        cached.promise = connect(DB, opts).then((mongoose) => {
          console.log("--- db connected ---")
          return mongoose
        })
      }
      cached.conn = await cached.promise
      console.log("--- db connected ---")
}
    
export default mongodb;
