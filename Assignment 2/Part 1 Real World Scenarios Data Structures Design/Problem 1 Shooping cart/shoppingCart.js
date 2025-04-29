// Stack implemented using array
class CustomStack {
    constructor(maxSize = 100) {
      this.stack = new Array(maxSize);
      this.top = -1;
      this.maxSize = maxSize;
    }
  
    push(value) {
      if(this.top >= this.maxSize - 1){
        console.log('Stack overflow');
        return;
      }
      this.top++;
      this.stack[this.top] = value;   // O(1) time complexity to insert a value
    }
  
    pop() {
      if (this.top < 0) {
        console.log('Stack underflow');
        return null; 
      }

      const item = this.stack[this.top];
      this.top--;           // O(1) time complexity to remove a value
      return item;
    }
  
    peek() {
      if (this.top < 0) {
        console.log('Stack underflow');
        return null;
      }
      return this.stack[this.top];      // O(1) time complexity
    }
    isEmpty() {
      return this.top === -1;     // O(1) time complexity
    }
  }
  
class ShoppingCart {
    constructor(cartSize = 100) {
      this.cart1 = new CustomStack(cartSize);  // Creating a cart. constant time operation
    }
  
    addProduct(product) {
      this.cart1.push(product);   // O(1) time complexity
    }
  
    finalizeCart() {
      const cart2 = new CustomStack(this.cart1.maxSize);  // Another cart to order the processing sequence
      const result = [];  // processed items

        console.log('Initial cart: ',this.cart1.stack);
    
        while (!this.cart1.isEmpty()) {
          cart2.push(this.cart1.pop());   // O(n) operation. depends on the number of items
        }

      console.log('Ready to preocess cart: ',cart2.stack);
  
      while (!cart2.isEmpty()) {
        const item = cart2.pop();
        console.log('Processing: ',item);
        result.push(item);
        this.cart1.push(item); // O(n) operations.
      }
      // console.log(this.cart1, cart2);
      console.log('Procrssed & finalized cart: ', result);
      return;
    }
  }

const cart = new ShoppingCart();
cart.addProduct('Product 1');
cart.addProduct('Product 2');
cart.addProduct('Product 3');
cart.addProduct('Product 4');
  
cart.finalizeCart();