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
    push(val) {                          //Pushing an element to the last of the linked list
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
        if(this.length == 0){
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
    get_node(index){
        if (this.head == null || index < 0 || index >= this.length){
            return undefined;
        }
        var current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    set_value(index, value){
        if(this.head == null || index < 0 || index >= this.length){
            return false;
        }
        var current = this.head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        current.value = value;
        return true;
    }

    insert(index, value){
        if(index < 0 || index > this.length){
            return false;
        }
        if (index == 0){
            this.unshift(value);
            this.tail.next = null;
            return true;
        }
        if(index == this.length){
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

    delete(index){
        if (index <0 || index >= this.length){
            return false
        }
        if(index == 0){
            this.shift();
            return true;
        }
        var prev_element = this.get_node(index - 1);
        var next_element = prev_element.next.next;
        prev_element.next = next_element;
        this.length--;
        return true;
    }

    reverse(){
        console.log("-----");
    }

    print() {
        var cur_element = this.head;
        for(;cur_element != null;cur_element = cur_element.next) {
            console.log(cur_element.value);
        }
        return this;
    }
}

var list = new singly_linked_list();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(list);
