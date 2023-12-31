require('dotenv').config();
const favoritesRoutes = require('./routes/favorites');
const userRoutes = require('./routes/user');
const profileRoutes = require('./routes/profiles');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// express app
const app = express();

app.use(cors());

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/favorites', favoritesRoutes);
app.use('/api/user', userRoutes);
app.use('/api/profiles', profileRoutes);

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    });




