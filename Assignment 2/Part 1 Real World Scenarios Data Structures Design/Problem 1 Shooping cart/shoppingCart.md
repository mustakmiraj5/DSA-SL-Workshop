# Problem 1: Shopping Cart System
Requirements:
1. When a user adds a product, the latest added product must be shown at the top.(LIFO)
2. When the cart is finalized, products should be processed from oldest to newest.(FIFO)
3. Need to implement efficient push, pop, and finalization operations.

To solve this problem we need 2 stacks. One is for adding products with LIFO and the other is for processing products in FIFO. In order to achieve FIFO we have to reverse the first stack. In that way the product we added at first in the first array will be at the top of the second array.

# Push Operation
Adding a product is constant time operation.O(1)
```
    push(value) {
      if(this.top >= this.maxSize - 1){
        console.log('Stack overflow');
        return;
      }
      this.top++;
      this.stack[this.top] = value;
    }
```
# Pop Operation
Removing a product is constant time operation.O(1)
```
    pop() {
      if (this.top < 0) {
        console.log('Stack underflow');
        return null; 
      }

      const item = this.stack[this.top];
      this.top--;
      return item;
    }
```
# Finalize Operation
O(n) time complexity to process the product and reversing the stack. Additional O(n) space to store the result.
```
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
```
