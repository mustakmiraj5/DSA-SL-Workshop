# Can you use Binary Search on an infinite data stream? Why or why not?

No. I can not directly use binary search in this case. Binary search need random access to the middle point of the dataset. If it is an infinite data stream then i can not jump to the middle point.

But if the data stream is sorted and i have a range or target then may be it is possible to use binary search.