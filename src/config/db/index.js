import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("connect succesfully");
  } catch (error) {
    console.log("fail", error);
  }
};
export default connect;
