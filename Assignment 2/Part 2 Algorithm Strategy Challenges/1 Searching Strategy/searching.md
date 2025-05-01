# Problem 1: Searching Strategy
I have to search for patients by their id where they arrive randomly. So i need a searching strategy.

If the patients are coming randomly then it is garuanteed that the data will be unsorted. And I also have id for each patient. So I can use hash map search for this problem. 

Hashmap will take O(1) time for lookup where linear search will take O(n) time. Binary search need sorted data. O(nlog n) for sorting the data and O(log n) for searching. Interpolation search need uniformly distributed sorted data so it is not a good option. 