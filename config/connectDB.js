const mongoose=require('mongoose')





const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://nidhaldb:nidhal123@cluster0.k5wfg.mongodb.net/REST-API?retryWrites=true&w=majority", 
       
      );
      console.log('MongoDB connected...');
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = connectDB;