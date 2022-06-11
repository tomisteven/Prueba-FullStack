import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


 mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})
 





