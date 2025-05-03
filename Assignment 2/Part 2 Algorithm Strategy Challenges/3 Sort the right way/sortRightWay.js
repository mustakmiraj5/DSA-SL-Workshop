class SortRightWay{
    constructor(array){
        this.array = array;
    }

    insertionSort(){
        for(let i = 1; i<this.array.length; i++){
            let key = this.array[i];
            let j = i-1;
            while(j>=0 && this.array[j] > key){
                this.array[j+1] = this.array[j];
                j--;
            }
            this.array[j+1] = key;
        }
    }
}

const arr = new SortRightWay([12, 11, 13, 5, 6]);
arr.insertionSort();
console.log(arr.array);