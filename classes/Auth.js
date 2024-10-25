const Customer = require('./Customer');  // Import the Customer class

class Auth{
    constructor(customers){
        this.customers = [];
    }
    register(name, email, shippingAddress){
        const c1 = new Customer(name, email, shippingAddress);
        this.customers.push(c1);
    }
    login(email){
        if(this.customers.find(customer => customer.email === email)){
            return true;
        }
        else return null
    }
}
module.exports = Auth;  // Export the Auth class