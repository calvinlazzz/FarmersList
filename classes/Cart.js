class Cart {
    constructor(products,total) {
        this.products = [];  
        this.total = 0;     
    }

    addProduct(product) {
        this.products.push(product);   
        this.total += product.price;   
    }

    removeProduct(index) {
        if (index >= 0 && index < this.products.length) {
            const productToRemove = this.products[index];
            this.total -= productToRemove.price;  
            this.products.splice(index, 1);     
        } else {
            console.log("Invalid index");
        }
    }
}
module.exports = Cart;  // Export the Cart class