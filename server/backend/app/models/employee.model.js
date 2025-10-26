module.exports = mongoose => {
  const Employee = mongoose.model(
    "employee",
    mongoose.Schema(
      {
        email: String,
        firstName: String,
        lastName: String,
        position: String,
        age: Number,
      },
      { timestamps: true }
    )
  );

  return Employee;
};