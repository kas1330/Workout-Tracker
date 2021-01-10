mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout-tracker234",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

  //localhost connection here