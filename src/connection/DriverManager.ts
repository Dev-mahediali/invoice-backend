import mongoose from "mongoose";

const DriverManager = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://inayatalisafalsoftcom:MmD7mKZyJAfffw7g@safal-invoice-cluster.ecpka87.mongodb.net/?retryWrites=true&w=majority"
    );

    return { connection, message: "Driver successfully connected" };
  } catch (error) {
    return {
      message: error.message as string,
      connection: null,
    };
  }
};

export default DriverManager;
