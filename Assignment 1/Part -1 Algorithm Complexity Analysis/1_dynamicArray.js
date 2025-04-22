class DynamicArray{
    constructor(){
        this.capacity = 10;    // assigning capacity count as 1 operation
        this.size = 0;          // assign size 1 operation
        this.array = new Array(this.capacity);    // create new array 1 operation

        // 3 consant operations. O(1) time
    }
    
    #resizeArray(){
        this.capacity = this.capacity * 2;      // 2 operations. calculating new capacity and assign capacity
        const newArray = new Array(this.capacity);      // 1 operation for creating array

        for(let i = 0; i<this.size; i++){       // assign 0 to i is 1 operation. if size = 5 then total operation is 4(1 extra operation for i=0)+3+3+3+3 = 16.  So time complexity is O(n), n = size
            newArray[i] = this.array[i];        // O(n) extra memory to copy the old array to new array. n=size
        }

        this.array = newArray;  // 1 operation to assign new array
    }

    push(value){
        if(this.size == this.capacity){
            this.resizeArray();     // resize array is not taking any parameter so it is constant time operation, O(1)
        }

        this.array[this.size] = value;   // Assigning 1 operation
        this.size++;        // increase and assign size 2 operation
    }

    insertAtBeginning(value){
        if(this.size == this.capacity){
            this.resizeArray();     // constant O(1) operation
        }

        for(let i = this.size; i>0; i--){       // O(n) for loop iteration equal to size times
            this.array[i] = this.array[i-1];
        }

        this.array[0] = value;  // 1 operation
        this.size++;            // 2 operation  
    }
}

const arr = new DynamicArray();

arr.push(12);
arr.push(52);
arr.push(34);

console.log(arr.array);  // [ 12, 52, 34, <7 empty items> ] created array with 3 values

arr.insertAtBeginning(25);   // adding at beginning. 

console.log(arr.array);     // [ 25, 12, 52, 34, <6 empty items> ]  25 added at index 0

arr.push(11);
arr.push(31);

console.log(arr.array);