// script.js

// Fonction pour ajouter un produit au panier
function addToCart(productId, quantity) {
    // Récupérer le panier à partir du localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    
    // Ajouter ou mettre à jour le produit dans le panier
    if (cart[productId]) {
        cart[productId] += quantity; // Augmenter la quantité si déjà dans le panier
    } else {
        cart[productId] = quantity; // Sinon, l'ajouter avec la quantité
    }

    // Sauvegarder le panier dans le localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produit ajouté au panier !');
}

// Événements pour le formulaire de connexion
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Ici, vous pouvez ajouter une logique pour gérer la connexion, comme une requête API
    console.log(`Connexion avec l'email: ${email} et le mot de passe: ${password}`);
});

// Événements pour le bouton "Ajouter au panier"
document.getElementById('addToCart')?.addEventListener('click', function () {
    // Exemple d'ID produit et quantité (à remplacer par des valeurs réelles)
    const productId = 1; // Remplacez cela par l'ID réel du produit
    const quantity = 1; // Par défaut, 1 article

    addToCart(productId, quantity);
});

// Événements pour le tableau du panier (pour retirer un article)
document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function () {
        const row = button.closest('tr'); // Trouver la ligne correspondante
        row.remove(); // Retirer la ligne du tableau
        // Ajoutez une logique pour mettre à jour le localStorage ici si nécessaire
    });
});
