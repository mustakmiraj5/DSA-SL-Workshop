// Count common elements in two hash sets.
/**
 * to count the common elements between 2 hash set we have to check if an elemnt of a hashset is available in the other hashset. So inside a hashset i have a method which takes another hashset as parameter and match elements of both sets.
 */
class HashSet{
    constructor(size = 1000){
        this.size = size;           // 1 operation
        this.table = new Array(size);   // creating an array and assign 2 operation    // constructor having O(1) time complexity
    }

    #hash(key, size = this.size) {
		let hash = 5381;
		for (let ch of key) {
			hash = (hash * 33) ^ ch.charCodeAt(0);      // function is from workshop resource
		}
		return Math.abs(hash) % size;
	}
   
    set(key, value){
        if(this.has(key)) return;           // calling the "has" function.O(1) constant look up
        const index = this.#hash(key);  // if the key does not exist then generate hash. constant time
        this.table[index] = value;      // assign value to index. constant time
    }

    get(key){
        const index = this.#hash(key);         // get the hash value. constant time
        return this.table[index];           // return the value. O(1) 
    }
    has(key) {
		return !!this.get(key);         // return true if value exist. O(1)
	}

    searchElement(value){
        for(let i = 0; i<this.size; i++){       // We do not know where or in which index a value will be assigned. so we have to look for the value within the whole array. That will cost O(n) time complexity. Searching by index will be O(1).
            if(this.table[i] == value){
                return true;
            }
        }
        return false;
    }

    countCommonElements(otherSet){
        let count = 0;
        /**
         * here i will go through all the indexes of the array.  if the value is not null then check if that value can be found in the other hashset with searchElement method. O(n) time complexity for the  loop and O(n) for the searchElement method.
         */
        for(let i = 0; i<this.size; i++){
            if(this.table[i]){
                if(otherSet.searchElement(this.table[i])){
                    count++;
                }
            }
        }
        return count;
    }

}


const set1 = new HashSet();
set1.set("name", "Oggy");
set1.set("age", 30);
set1.set("city", "Paris");
set1.set("country", "France");
set1.set("language", "French");

const set2 = new HashSet();
set2.set("name", "Jack");
set2.set("age", 35);
set2.set("city", "Paris");
set2.set("country", "France");
set2.set("language", "French");

console.log(set1.countCommonElements(set2));