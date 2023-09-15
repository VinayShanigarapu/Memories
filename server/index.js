import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
//We are setting the body parser so that they can properly send our request 
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); //This makes every post to route to /posts path like localhost/5000/posts

app.use('/posts', postRoutes); // every route inside postroutes will start with posts
app.use('/user', userRoutes);

app.get('/',(req,res) => {
    res.send('Hello to Memories API'); // For Home page
});
// For Deploying the back end application we use heroku (password - vinayvirat_9)
const CONNECTION_URL = 'mongodb+srv://ShanigarapuVinay:vinayvirat9@cluster0.2mnen.mongodb.net/';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) //If the application is successfull
    .catch((error) => console.log(error.message));

mongoose.connect(CONNECTION_URL).then(()=>{console.log()})