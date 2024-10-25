const Order = require('../models/orderModel');
const Product = require('../models/productModel');

// Créer une commande
const createOrder = async (req, res) => {
    const { products } = req.body;
    const userId = req.user.userId; // Récupérer l'ID de l'utilisateur à partir du token

    try {
        let totalAmount = 0;
        const orderProducts = [];

        // Vérifier les produits et calculer le montant total
        for (let item of products) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).json({ message: `Produit non trouvé pour l'ID ${item.product}` });
            }
            totalAmount += product.price * item.quantity;
            orderProducts.push({ product: product._id, quantity: item.quantity });
        }

        // Créer la commande
        const order = new Order({
            user: userId,
            products: orderProducts,
            totalAmount: totalAmount,
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de la commande' });
    }
};

// Récupérer les commandes d'un utilisateur
const getUserOrders = async (req, res) => {
    const userId = req.user.userId; // Récupérer l'ID de l'utilisateur à partir du token

    try {
        const orders = await Order.find({ user: userId }).populate('products.product');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des commandes' });
    }
};

module.exports = { createOrder, getUserOrders };
