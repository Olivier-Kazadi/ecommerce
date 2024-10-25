const Product = require('../models/productModel');

// Récupérer tous les produits
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
    }
};

// Récupérer un produit par ID
const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération du produit' });
    }
};

module.exports = { getAllProducts, getProductById };
