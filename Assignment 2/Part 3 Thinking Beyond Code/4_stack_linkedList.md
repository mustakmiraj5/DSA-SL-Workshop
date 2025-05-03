#  Would you choose a Stack (Array) or Stack (Linked List) for browser tab history? Justify.

It will be a good option to choose linked list over array in this situation.
Array is for fixed sized stack. Dynamic array need to resize. 

Browser history can grow and shrink as we visit more pages and undo. Linked list does not need resizing and have efficient push pop operations with O(1) time complexity. We can store all the necessary data inide a single node as we wish. so linked list based stack is a great option.