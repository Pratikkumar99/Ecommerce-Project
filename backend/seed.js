import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './models/product.js';

dotenv.config();

const sampleProducts = [
    {
        title: "Wireless Bluetooth Headphones",
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
        price: 5999,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        stock: 50
    },
    {
        title: "Smart Watch Series 5",
        description: "Feature-packed smartwatch with health tracking, GPS, and water resistance.",
        price: 24999,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        stock: 30
    },
    {
        title: "Running Shoes Pro",
        description: "Lightweight and comfortable running shoes with advanced cushioning technology.",
        price: 8999,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        stock: 100
    },
    {
        title: "Leather Laptop Bag",
        description: "Premium leather laptop bag with multiple compartments for organization.",
        price: 6499,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        stock: 25
    },
    {
        title: "Organic Coffee Beans",
        description: "Premium organic coffee beans sourced from South America. 1kg pack.",
        price: 1499,
        category: "Food",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80",
        stock: 200
    },
    {
        title: "Yoga Mat Premium",
        description: "Extra thick yoga mat with non-slip surface and carrying strap.",
        price: 2999,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
        stock: 75
    },
    {
        title: "Mechanical Keyboard RGB",
        description: "Gaming mechanical keyboard with RGB lighting and programmable keys.",
        price: 11999,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=500&q=80",
        stock: 40
    },
    {
        title: "Cotton T-Shirt Pack",
        description: "Pack of 3 premium cotton t-shirts in different colors.",
        price: 2499,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        stock: 150
    },
    {
        title: "Stainless Steel Water Bottle",
        description: "Insulated water bottle that keeps drinks cold for 24 hours. 1L capacity.",
        price: 1999,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
        stock: 120
    },
    {
        title: "Wireless Charging Pad",
        description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
        price: 2499,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=500&q=80",
        stock: 60
    },
    {
        title: "Desk Lamp LED",
        description: "Adjustable LED desk lamp with multiple brightness levels and USB port.",
        price: 3499,
        category: "Home",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
        stock: 45
    },
    {
        title: "Backpack Travel",
        description: "Large capacity travel backpack with laptop compartment and anti-theft design.",
        price: 4999,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        stock: 35
    }
];

const seedData = async () => {
    try {
        await connectDB();
        
        // Clear existing products
        await Product.deleteMany();
        console.log('Cleared existing products');
        
        // Insert sample products
        await Product.insertMany(sampleProducts);
        console.log('Sample products inserted successfully');
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
