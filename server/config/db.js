import mongoose from "mongoose";
// conncted with database

const connectDb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL, {
        dbName: "movie_watchlist_application",
      })
      .then((c) =>
        console.log(`Databse connected safely with ${c.connection.host}`)
      );
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
