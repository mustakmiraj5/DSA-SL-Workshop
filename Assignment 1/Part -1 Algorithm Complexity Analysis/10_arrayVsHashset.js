// Compare array vs. hash set lookup performance.

function lookUpInArray(array, value){
    for(let i = 0; i<array.length; i++){
        if(array[i] == value){
            return true;
        }
    }
    return false;
}

/**
 * in this array we have to search lineraly in every indexes to find the desired value. if we are lucky and the value is in index 0 then we might be able to find it in constant time O(n), but in most of the cases we have to iterate through the array. the longer the array size the more time it will take, complexity O(n).
 */


/**
 * in case of hashset we get the index from hashing the key and access the value on constant time.
 */
function lookUpInHashSet(hashSet,key, value, hash){
    const index = hash(key);
    return hashSet[index] == value;
}