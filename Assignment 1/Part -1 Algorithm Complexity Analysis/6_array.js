class isUnique{
    constructor(array){
        this.array = array;
    }

    checkArray(){
        let distinct = new Set();
        for(let i = 0; i<this.array.length; i++){
            distinct.add(this.array[i]);
        }
        return (distinct.size == this.array.length);
    }
}

const arr = new isUnique([1,3,3,4,5,6,7,8,9,10]);
console.log(arr.checkArray());


// from dynamic array problem

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
            this.#resizeArray();     // resize array is not taking any parameter so it is constant time operation, O(1)
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

    isUnique(){
        let distinct = new Set();
        for(let i = 0; i<this.size; i++){
            distinct.add(this.array[i]);
        }
        console.log(distinct.size, this.size);
        return (distinct.size == this.size);
    }
}

const arr1 = new DynamicArray();
arr1.push(12);
arr1.push(52);
arr1.push(34);
arr1.push(22);
arr1.push(23);
arr1.push(23);

console.log(arr1.array);
console.log(arr1.isUnique());
