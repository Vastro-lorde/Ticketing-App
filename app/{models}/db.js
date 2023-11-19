// Database connection function
import { connect } from 'mongoose';
const DB = process.env.MONGODB_URL
// 
const mongodb = async ()=> {
 
    try {
       await connect(DB);
        console.log(`Database connection successful!`)    
    } catch (err) {
        console.log(err); 
    }
    }
    
export default mongodb;