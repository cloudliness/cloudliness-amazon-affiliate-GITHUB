import 'dotenv/config';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import products from '../seed.js';

const seedDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Clear existing products
        await Product.deleteMany({});

        // Insert seed data
        await Product.insertMany(products);

        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();
