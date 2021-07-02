export const multiMongooseToObject = (arr) => {
  return arr.map((arr) => arr.toObject());
};
export const mongooseToObject = (mongoose) => {
  return mongoose ? mongoose.toObject() : mongoose;
};
