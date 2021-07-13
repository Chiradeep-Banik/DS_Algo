#include <iostream>

using namespace std;

class node{
public:
    double value;
    class node *next = NULL;
    node(double val){
        value = val;
        next = NULL;
    }
};
void print_node(node n){
    cout << "Value : " << n.value << endl;
    cout << "Next : " << n.next << endl;
}

typedef class node *nodeptr;

class singly_linked_list{
public:
    int length = 0;
    nodeptr head;
    nodeptr tail;

    void push(double value){
        cout << "Pushing " << value << endl;
        nodeptr new_pointer = new node(value);
        if (length == 0)
        {
            head = new_pointer;
            tail = new_pointer;
        }
        else
        {
            tail->next = new_pointer;
            tail = new_pointer;
        }
        length++;
    }
    void pop(){
        cout << "Popping from the end of the LinkedList" << endl;
        if (length == 0)
        {
            cout << "List is empty" << endl;
        }
        else
        {
            nodeptr temp = head;
            while (temp->next->next != NULL)
            {
                temp = temp->next;
            }
            tail = temp;
            tail->next = NULL;
            length--;
        }
    }

    void shift(){
        cout << "Removes node from the beginning of the LinkedList" << endl;
        if (length == 0)
        {
            cout << "List is empty" << endl;
        }
        else
        {
            nodeptr temp = head->next;
            head = temp;
            length--;
        }
    }

    void unshift(double val){
        cout << "Adds node to the beginning of the LinkedList" << endl;
        if (length == 0)
        {
            push(val);
        }
        else
        {
            nodeptr new_node = new node(val);
            new_node->next = head;
            head = new_node;
            length++;
        }
    }

    node *get_nodeptr(int index){
        nodeptr temp = head;
        if (index < 0 || index > length - 1)
        {
            cout << "Index out of bounds" << endl;
        }
        else
        {
            for (int i = 0; i < index; i++)
            {
                temp = temp->next;
            }
        }
        return temp;
    }

    bool set_value(int index, double value){
        if (head == NULL || index < 0 || index > length)
        {
            return false;
        }
        nodeptr temp = head;
        for (int i = 0; i < index; i++)
        {
            temp = temp->next;
        }
        temp->value = value;
        return true;
    }

    bool insert(int index, double value){
        if (index < 0 || index > length)
        {
            return false;
        }
        if (index == 0)
        {
            unshift(value);
            return true;
        }
        if (index == length)
        {
            push(value);
            return true;
        }
        nodeptr temp = get_nodeptr(index);
        nodeptr new_node = new node(value);
        nodeptr prev_node = get_nodeptr(index - 1);
        prev_node->next = new_node;
        new_node->next = temp;
        length++;
        return true;
    }

    bool delete_node(int index){
        cout << "Deleting node at index " << index << endl;
        if (head == NULL || index < 0 || index > length)
        {
            return false;
        }
        if (index == 0)
        {
            shift();
            return true;
        }
        if (index == length - 1)
        {
            pop();
            return true;
        }
        nodeptr prev_node = get_nodeptr(index - 1);
        nodeptr temp = prev_node->next;
        prev_node->next = temp->next;
        length--;
        return true;
    }
    bool reverse(){
        cout << "Reversing the LinkedList" << endl;
        if (head == NULL)
        {
            return false;
        }
        nodeptr temp = head;
        head = tail;
        tail = temp;
        nodeptr next_value;
        nodeptr prevval = NULL;
        while (next_value != NULL)
        {
            next_value = temp->next;
            temp->next = prevval;
            prevval = temp;
            temp = next_value;
        }
        return true;
    }

    void print(){
        nodeptr temp = head;
        for (; temp != NULL; temp = temp->next)
        {
            cout << temp->value << "->";
        }
        cout << "NULL\n";
        cout << "Length : "<<length << endl;
    }
};

int main(){
    singly_linked_list list;
    list.push(1.0);
    list.push(2.0);
    list.push(3.0);
    list.push(4.0);
    list.push(5.0);

    list.pop();
    list.shift();
    list.unshift(1);

    cout << "Value of the node at 2 : " << list.get_nodeptr(2)->value << endl;
    cout << "Inserted value at 4 : " << list.insert(4, 13) << endl;
    cout << "Set the value at 4 as 5 : " << list.set_value(4, 5) << endl;
    cout << "Deleted the node at 2 : " << list.delete_node(2) << endl;

    list.print();
    list.reverse();
    list.print();

    return 0;
}