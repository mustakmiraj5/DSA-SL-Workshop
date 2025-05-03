# Why is Bubble Sort considered impractical for large datasets?

Bubble sort has a time complexity of O(n^2) in the worst case. 
Means it will run quadratic time of a dataset size. To sort 100000 data it will take a billion operations. So it is not practically suitable for large datasets.

# Give a case where it may outperform Merge Sort.
For a small and fixed and nearly sorted dataset bubble sort can outperform merge sort. 
We can stop the bubble sort operation with a swap flag if no swap is necessary. But merge sort will still run and take more operations.