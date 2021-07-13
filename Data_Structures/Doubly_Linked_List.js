/**
 * Doubly Linked List -- Each element contains a pointer to the next and previous element in the list.
 * 
 *              - Has bi-directional connections.
 *              - Other than that it is like a singly linked list.
 * 
 *         - Only draw back is that it takes up more memory.
*/

class node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doubly_linked_list {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {                                  // Push a value to the end of the list
        var new_node = new node(value);
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
            this.length++;
            return this;
        }
        this.tail.next = new_node;
        new_node.prev = this.tail;
        this.tail = new_node;
        this.length++;
        return this;
    }

    pop() {                                  // Pop a value from the end of the list
        if (this.head == null) {
            return undefined;
        }
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return this;
    }

    shift() {                                //Removes the first element of the list
        if (this.length == 0) {
            return undefined;
        }
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return this;
    }

    unshift(value) {                         //Add a value to the front of the list
        if (this.length == 0) {
            this.push(value);
        } else {
            var new_head = new node(value);
            new_head.next = this.head;
            this.head.prev = new_head;
            this.head = new_head;
            this.head.prev = null;
            this.length++;
            return this;
        }
    }

    get_node_unoptimized(index) {                        //Get a node at a particular index
        if (this.length == 0 || index < 0 || index > this.length - 1) {
            return undefined;
        }
        var temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    get_node_optimized(index) {                                 //Get a node at a particular index
        if (this.length == 0 || index < 0 || index > this.length - 1) {
            return undefined;
        }
        if (index <= this.length / 2) {
            var temp = this.head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
            return temp;
        }
        if (index > this.length / 2) {
            var temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
            return temp;
        }
    }

    set(index, value) {                                   //Set a value at a particular index
        if (this.length == 0 || index < 0 || index > this.length - 1) {
            return false;
        }
        var temp = this.get_node_optimized(index);
        temp.value = value;
        return true;
    }

    insert(index, value) {                            //Insert a value at a particular index
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index == 0) {
            this.unshift(value);
            return true;
        }
        if (index == this.length) {
            this.push(value);
            return true;
        }
        var new_node = new node(value);
        var prev_node = this.get_node_optimized(index - 1);
        new_node.prev = prev_node;
        new_node.next = prev_node.next;
        new_node.next.prev = new_node;
        new_node.prev.next = new_node;
        this.length++;
        return true;
    }

    remove(index) {                              //Remove a value at a particular index
        if (this.length == null || index < 0 || index > this.length - 1) {
            return false;
        }
        if (index == 0) {
            this.shift();
            return true;
        }
        if (index == this.length - 1) {
            this.pop();
            return true;
        }
        var prev_node = this.get_node_optimized(index - 1);
        prev_node.next = prev_node.next.next;
        prev_node.next.prev = prev_node;
        this.length--;
        return true;
    }

    print() {
        var temp = this.head;
        for (; temp != null; temp = temp.next) {
            console.log(temp.value);
        }
    }
}
var list = new doubly_linked_list();

list.push(1);
list.push(2);
list.push(3);
list.pop();
list.shift();
list.unshift(1);
list.push(3);
console.log(list.get_node_unoptimized(0));
console.log(list.get_node_optimized(2));
console.log(list.set(2, 13));
list.insert(2, 1313);
list.remove(2);

console.log(list);
list.print();

/**
 * Doubly Linked List --- Time comlexities ---
 *          - Insertion
 *                  - At the front - O(1) -- unshift()
 *                  - At the back  - O(1) -- push()
 *                  - At the middle - O(n/2) -- insert()
 *          - Deletion
 *                  - At the front - O(1) -- shift()
 *                  - At the back  - O(1) -- pop()
 *                  - At the middle - O(n/2) -- delete()
 *          - Modifiying value
 *                  - O(n/2) -- set_value()
 *          - Searching
 *                  - O(n/2) -- get_node()
 *
*/