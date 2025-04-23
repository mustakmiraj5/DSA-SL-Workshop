// Search for an element in a hash set.
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

}

const set = new HashSet();
set.set("name", "Oggy");
set.set("name", "Jack");
set.set("name", "Bob");
set.set("age", 30);
set.set("age", 303);
set.set("age", 309);
set.set("city", "Paris");
set.set("city", "Dhaka");
set.set("city", "Kabul");

console.log(set.get("name")); // Output: "John"
console.log(set.get("age")); // Output: 30
console.log(set.get("city")); // Output: "New York"

console.log(set.has("name")); // Output: true
console.log(set.has("age")); // Output: true
console.log(set.has("city")); // Output: true
console.log(set.has("country")); // Output: false

console.log(set.table);

console.log(set.searchElement("Paris"));
console.log(set.searchElement("Khulna"));
