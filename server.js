require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Router'lar
const venueRoutes = require('./routes/venues'); // örnek
app.use('/api/venues', venueRoutes);

// PORT ve MongoDB bağlantısı
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB bağlı');
    app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
})
.catch(err => console.log('MongoDB hata:', err));
