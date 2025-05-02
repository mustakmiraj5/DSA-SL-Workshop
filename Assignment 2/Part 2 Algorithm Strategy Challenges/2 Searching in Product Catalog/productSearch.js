class SearchProduct{
    constructor(productList){
        this.productList = productList;  // 1 operation, O(1) time and space complexity
    }

    searchById(productId){
        let low = 0;            // 1 operation
        let high = this.productList.length - 1;      // 3 operation, get length, subtract 1, assign to high

        while(low <= high){
            const mid = Math.floor((low + high) / 2);  // 4 operation, add, divide, floor, assign. constant time operation. O(1)
            if(this.productList[mid].id === productId){     // access productList[mid] 1 operation
                return console.log('Product found: ',this.productList[mid]);
            }
            
            if(this.productList[mid].id < productId){
                low = mid + 1;      // 2 operation
            } else {
                high = mid - 1;     // 2 operation
            }

            /**
             * The loop is diving the list in half in each iteration until the result is foind. Number of iteration is log base 2 of n. So time complexity is O(log n)
             */
        }
        return console.log("Product not found");
    }
}

const productList = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
    { id: 5, name: "Product E" },
    { id: 6, name: "Product F" },
    { id: 7, name: "Product G" },
    { id: 8, name: "Product H" },
    { id: 9, name: "Product I" },
    { id: 10, name: "Product J" },
];

const products = new SearchProduct(productList);
products.searchById(5);
products.searchById(11);
