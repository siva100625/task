const express = require('express');
const server = express();
const port = 5000;

// Sample data
const items = [
    {
        id: 1,
        name: 'jeans',
    },
    {
        id: 2,
        name: 'shirt',
    }
];

// Middleware to parse JSON request body
server.use(express.json());

// Root route
server.get('/', (req, res) => {
    res.end("Server is running");
});

// GET route to fetch all products
server.get('/product', (req, res) => {
    res.json(items); // Respond with the items array in JSON format
});

// POST route to add a new product
server.post('/product', (req, res) => {
    const newItem = {
        id: items.length + 1, // Auto-increment ID
        name: req.body.name // Extract 'name' from request body
    };

    items.push(newItem); // Add the new item to the array

    res.status(201).json({
        message: "Item added successfully",
        item: newItem
    });
});

// PUT route to update an existing product by ID
server.put('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id); // Get product ID from URL parameter
    const updatedName = req.body.name; // Get updated name from request body

    // Find the product by ID
    const product = items.find(item => item.id === productId);

    if (product) {
        // Update the product name
        product.name = updatedName;

        res.json({
            message: "Product updated successfully",
            product: product
        });
    } else {
        // Product not found
        res.status(404).json({
            message: "Product not found"
        });
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
