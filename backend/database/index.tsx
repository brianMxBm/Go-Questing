import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log('connected'))
  .catch((err) => console.log(err));
