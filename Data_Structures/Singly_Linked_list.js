/**
 * Linked List --- It is a orders list of values without any index 
 *              - It has three properties
 *                      -Head
 *                      -Length
 *                      -Tail
 *              - Every element contains a value and a pointer to the next element
 *              - Each element is called a node 
 *              - And each node points to another node or NULL
 *              - Random excess to an element is not allowed
 * 
 *          - Really good for insertion and deletion 
 * 
 *      -- Singly linked list - only has uni-directional connection
*/

class node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class singly_linked_list {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        console.log("Pushing " + val + " to the linked list");                //Pushing an element to the last of the linked list
        var element = new node(val);
        if (this.head == null) {
            this.head = element;
            this.tail = element;
            this.tail.next = null;
        } else {
            this.tail.next = element;
            this.tail = element;
        }
        this.length++;
        return this;
    }

    pop() {                               // Removing an element from the last of the linked list
        console.log("Popping the last element of the linked list");
        var element_1 = this.head;
        if (this.head == null) {
            return undefined;
        }
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this;
        }
        this.length--;
        var element_2 = this.head.next;
        while (element_2.next != null) {
            element_1 = element_2;
            element_2 = element_2.next;
        }
        this.tail = element_1;
        this.tail.next = null;
        return this;
    }

    shift() {                                    //Removing an element from the first of the linked list
        console.log("Shifting the first element of the linked list to the next one");
        if (this.length == 0) {
            return undefined;
        }
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this;
        }
        this.head = this.head.next;
        this.length--;
        return this;
    }

    unshift(val) {                         //Adds an element to the first of the linked list
        console.log("Inserting at the first of the linked list the value " + val);
        if (this.length == 0) {
            this.push(val);
            return this;
        }
        this.length++;
        var cur_element = this.head;
        var new_head = new node(val);
        new_head.next = cur_element;
        this.head = new_head;
        return this;
    }
    get_node(index) {                                                  //Getting the node at the index specified
        console.log("Getting the node at the index " + index);
        if (this.head == null || index < 0 || index >= this.length) {
            return undefined;
        }
        var current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    set_value(index, value) {                                            //Setting the value of the element at the index specified
        console.log("Setting the value of the element at index " + index);
        if (this.head == null || index < 0 || index >= this.length) {
            return false;
        }
        var current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        current.value = value;
        return true;
    }

    insert(index, value) {
        console.log("Inserting at index " + index + " the value " + value);  //Inserting at index tha value specifies
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index == 0) {
            this.unshift(value);
            this.tail.next = null;
            return true;
        }
        if (index == this.length) {
            this.push(value);
            return true;
        }
        var prev_element = this.get_node(index - 1);
        var next_element = prev_element.next;
        var new_element = new node(value);
        prev_element.next = new_element;
        new_element.next = next_element;
        this.length++;
        return true;
    }

    delete(index) {                                                  //Deletest he node at index specified
        console.log("Deleting the element at index " + index);
        if (index < 0 || index >= this.length) {
            return false
        }
        if (index == 0) {
            this.shift();
            return true;
        }
        var prev_element = this.get_node(index - 1);
        var next_element = prev_element.next.next;
        prev_element.next = next_element;
        this.length--;
        return true;
    }

    reverse() {                                                      //Reversing the linked list
        console.log("Reversing the linked list");
        var cur_node = this.head;
        this.head = this.tail;
        this.tail = cur_node;
        var prev_node = null;
        var next_node = null;
        while (cur_node != null) {
            next_node = cur_node.next;
            cur_node.next = prev_node;
            prev_node = cur_node;
            cur_node = next_node;
        }
        return this;
    }

    print() {                                                      //Printing the linked list
        var cur_element = this.head;
        var arr = [];
        for (; cur_element != null; cur_element = cur_element.next) {
            arr.push(cur_element.value);
        }
        console.log(arr);
    }
}

var list = new singly_linked_list();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.reverse();
list.print();

console.log(list);

/**
 * Singly Linked List --- Time comlexities ---
 *          - Insertion
 *                  - At the front - O(1) -- unshift()
 *                  - At the back  - O(1) -- push()
 *                  - At the middle - O(n) -- insert()
 *          - Deletion
 *                  - At the front - O(1) -- shift()
 *                  - At the back  - O(n) -- pop()
 *                  - At the middle - O(n) -- delete()
 *          - Modifiying value
 *                  - O(n) -- set_value()
 *          - Searching
 *                  - O(n) -- get_node()
 *          - Reversing
 *                  - O(n) -- reverse()
 *
*/
