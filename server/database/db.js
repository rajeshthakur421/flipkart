import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://admin:admin@cluster0.ni41gwl.mongodb.net/`;
       try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('database  not connected')
        console.log('Error: ', error.message);
    }

};

export default Connection;