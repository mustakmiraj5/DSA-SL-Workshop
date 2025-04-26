// Rehash a hash table after crossing load factor.

/**
 * Load factor is the ratio of total elements of hashmap and the total capacity of hashmap. This ratio determines how full the hashmap is and when to resize the hashmap.
 * Load Factor = (size of the HashMap) / (Capacity of the hashmap)
 * Higher load factor means more values in the hashmap which can lead to more collisions.
 * 
 */

class HashTable {
    constructor(initialCapacity = 4, loadFactor = 0.5) {    // default values of parmeters
        this.capacity = initialCapacity;                // 1 assign operation
        this.loadFactor = loadFactor;                   // 1 assign operation
        this.size = 0;                                  // 1 assign operation
        this.table = new Array(this.capacity);         // O(n) time complexity for the size of capacity. capacity+1 operations here. O(n) space complexity for reserving the spot in memory.
    }

    #hash(key, capacity = this.capacity) {
		let hash = 5381;
		for (let ch of key) {
			hash = (hash * 33) ^ ch.charCodeAt(0);      // function is from workshop resource
		}
		return Math.abs(hash) % capacity;
	}

    #rehash() {
        this.capacity = this.capacity * 2;              //  2 operations. multiplication and assignment
        const oldTable = this.table;                    // O(1) time and space for reference assignment
        this.table = new Array(this.capacity);          // create new array O(n) time and space.
        this.size = 0;                                  // 1 operation
        // console.log('Rehashing... New capacity: ',this.capacity);

        for (let i = 0; i < oldTable.length; i++) {         // O(n) time complexity. 
            if (oldTable[i]) {
                this.set(oldTable[i].key, oldTable[i].value);       // have to go through all value pairs and set to new hashmap
            }
        }
    }

    set(key, value) {
        if (this.size / this.capacity >= this.loadFactor) {
            this.#rehash();             // liner time operation. 
        }

        const index = this.#hash(key);      // 2 operation. generate hash and assign
        // console.log(index);
        this.table[index] = { key, value };   //  assign the value. 1 operation
        this.size++;                          // 2 operations. increase value and reassign
    }

    get(key) {
        const index = this.#hash(key);
        return this.table[index];           // 1 operation. accessing the value with index
    }
}

const table = new HashTable();
table.set("name", "Oggy");
table.set("age", 30);
table.set("city", "Paris");
table.set("country", "France");
table.set("language", "French");

console.log(table.get("name")); // Output: { key: 'name', value: 'Oggy' }
console.log(table.get("age")); // Output: { key: 'age', value: 30 }
console.log(table.get("city")); // Output: { key: 'city', value: 'Paris' }
console.log(table.get("country")); // Output: { key: 'country', value: 'France' }

console.log(table.table);