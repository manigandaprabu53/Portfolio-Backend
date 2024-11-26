import config from '../Utils/config.js';
import mongoose from 'mongoose';

main().catch((error)=>console.log("MongoDB Connection Failed", error));

async function main(){
    await mongoose.connect(`${config.DB_URL}/${config.DB_NAME}`);
    console.log("MongoDB Connected");
}

export default mongoose