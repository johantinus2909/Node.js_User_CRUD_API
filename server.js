const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const logger = require('./middleware/logger');

dotenv.config();
const app = express();
app.use(express.json());
app.use(logger);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));

module.exports = { app, server }; 
