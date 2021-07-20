/**
 * Heap -- Binary Heap --- Is a binary tree --- that is every parent only has two children
 *              -- Binary Heaps are of two types:  
 *                  - MIN HEAP : The parent elements are always smaller than the child elements
 *                  - MAX HEAP : The parent elements are always larger than the child elements
 * 
 *      A binary heap is always compact
 *          - They only go to the next level when the current level is full
 *          - The child nodes are added from the left
 *          - No order among the child nodes
*/

/**Arrays can be used to represent a binary heap
 * 
 *      - If we keep inserting the elements of the binary heap into the array from left to right and level by level
 *              -- Each parent will have its child at
 *                      --- Left Child - 2n+1    |  n = index of the parent
 *                      --- Right Child - 2n+2   |
 *              -- Each child have their parent at 
 *                      --- floor((n-1)/2)
 * 
*/

// Array implementation of Binary Heap

class binary_heap_array {

    constructor() {
        this.value_array = [];
    }
    max_insert(value) {
        this.value_array.push(value);
        this.max_heapify_up();
        return;
    }
    remove_max() {
        if (this.value_array.length == 0) {
            return null;
        }
        if (this.value_array.length == 1) {
            return this.value_array.pop();;
        }
        var head = this.value_array[0];
        this.value_array[0] = this.value_array[this.value_array.length - 1];
        this.value_array.pop();
        this.max_heapify_down();
        return head;
    }
    delete_max_heap(value) {
        var my_index = -1;
        if(this.value_array.length == 0){
            return false;
        }
        for (let i = 0; i < this.value_array.length; i++) {
            if (value == this.value_array[i]) {
                my_index = i;
                break;
            }
        }
        if(my_index == -1){
            return false;
        }
        var left_child_index = my_index * 2 + 1;
        var right_child_index = my_index * 2 + 2;
        while (left_child_index<this.value_array.length-1 || right_child_index<this.value_array.length-1) {
            if(this.value_array[right_child_index] > this.value_array[left_child_index]){
                this.value_array[my_index] = this.value_array[right_child_index];
                this.value_array[right_child_index] = value;
                my_index = right_child_index;
            }else{
                this.value_array[my_index] = this.value_array[left_child_index];
                this.value_array[left_child_index] = value;
                my_index = left_child_index;
            }
            left_child_index = my_index * 2 + 1;
            right_child_index = my_index * 2 + 2;
        }
        this.value_array[my_index] = this.value_array[this.value_array.length-1];
        this.value_array[this.value_array.length-1] = value;
        this.value_array.pop();
        return true;
    }

    max_heapify_up() {
        var length = this.value_array.length;
        var my_item = this.value_array[length - 1];
        var my_index = length - 1;
        var my_parent_index = Math.floor((my_index - 1) / 2);
        while (my_index > 0 && this.value_array[my_parent_index] < my_item) {
            this.value_array[my_index] = this.value_array[my_parent_index];
            this.value_array[my_parent_index] = my_item;
            my_index = my_parent_index;
            my_parent_index = Math.floor((my_index - 1) / 2);
        }
        return;
    }
    max_heapify_down() {
        var length = this.value_array.length;
        var my_item = this.value_array[0];
        var my_index = 0;
        if (length == 2) {
            if (this.value_array[1] > this.value_array[0]) {
                this.value_array[0] = this.value_array[1];
                this.value_array[1] = my_item;
                return;
            }
        }
        while (true) {
            var left_child_index = 2 * my_index + 1;
            var right_child_index = 2 * my_index + 2;
            var swapped = false;
            if (this.value_array[left_child_index] >= this.value_array[right_child_index]) {
                if (my_item < this.value_array[left_child_index]) {
                    this.value_array[my_index] = this.value_array[left_child_index];
                    this.value_array[left_child_index] = my_item;
                    my_index = left_child_index;
                    swapped = true;
                }
            } else {
                if (my_item < this.value_array[right_child_index]) {
                    this.value_array[my_index] = this.value_array[right_child_index];
                    this.value_array[right_child_index] = my_item;
                    my_index = right_child_index;
                    swapped = true;
                }
            }
            if (swapped == false) {
                break;
            }
        }
    }

    min_insert(value) {
        this.value_array.push(value);
        this.min_heapify_up();
        return;
    }
    min_heapify_up() {
        var length = this.value_array.length;
        var my_item = this.value_array[length - 1];
        var my_index = length - 1;
        var my_parent_index = Math.floor((my_index - 1) / 2);
        while (my_index > 0 && this.value_array[my_parent_index] > my_item) {
            this.value_array[my_index] = this.value_array[my_parent_index];
            this.value_array[my_parent_index] = my_item;
            my_index = my_parent_index;
            my_parent_index = Math.floor((my_index - 1) / 2);
        }
        return;
    }
}

var max_heap_arr = new binary_heap_array();
max_heap_arr.max_insert(41);
max_heap_arr.max_insert(39);
max_heap_arr.max_insert(33);
max_heap_arr.max_insert(18);
max_heap_arr.max_insert(27);
max_heap_arr.max_insert(12);
max_heap_arr.max_insert(55);
max_heap_arr.remove_max();
max_heap_arr.delete_max_heap(18);

console.log("Max_heap -- ", max_heap_arr.value_array);

var min_heap_arr = new binary_heap_array();
min_heap_arr.min_insert(41);
min_heap_arr.min_insert(39);
min_heap_arr.min_insert(33);
min_heap_arr.min_insert(18);
min_heap_arr.min_insert(27);
min_heap_arr.min_insert(12);
min_heap_arr.min_insert(55);

console.log("Min_heap -- ", min_heap_arr.value_array);
//41, 39, 33, 18, 27, 12 
