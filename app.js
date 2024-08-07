const express = require('express');
const mongoose = require('mongoose'); // Connect to MongoDB
const dotenv = require('dotenv'); // Use environment variables

// Configuration
const app = express();
dotenv.config(); // Load .env file

app.use(express.json()); // Parse JSON data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URI, {
 
})
.then(() => console.log('Mongo DB connected'))
.catch(err => console.log(err));

// Define Routes
const productRoutes = require('./routes/product'); // Load product routes
const authRoutes = require('./routes/auth');

// Use Routes
app.use("/api/product", productRoutes); // Use product routes
app.use("/api/auth",authRoutes );

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
