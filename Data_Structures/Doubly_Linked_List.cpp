#include <iostream>

using namespace std;

class node{
public:
    double value;
    node* next = NULL;
    node* prev = NULL;

    node(double val){
        value = val;
        node* next = NULL;
        node* prev = NULL;
    }
};

typedef node* nodeptr;

void print_node(node n){
    cout << "Value : " << n.value << endl;
    cout << "Next : " << n.next << endl;
    cout << "Prev : " << n.prev << endl;
}

class doubly_linked_list{
public:
    nodeptr head = NULL;
    nodeptr tail = NULL;
    int length = 0;

    void push(double value){
        nodeptr new_node = new node(value);
        if (head == NULL){
            head = new_node;
            tail = new_node;
            length++;
        }else{
            tail->next = new_node;
            new_node->prev = tail;
            tail = new_node;
            length++;
        }
    }

    void pop(){
        cout << "Popping the last element" << endl;
        if (length == 0){
            cout << "Nothing to pop" << endl;
        }else{
            if(length == 1){
                head = NULL;
                tail = NULL;
                length--;
            }else{
                tail = tail->prev;
                tail->next = NULL;
                length--;
            }
        }
    }

    void shift(){
        cout << "Removing the first element" << endl;
        if(length == 0){
            cout << "Nothing to shift" << endl;
        }else{
            if (length == 1){
                head = NULL;
                tail = NULL;
                length--;
            }else{
                head = head->next;
                head->prev = NULL;
                length--;
            }
        }
    }
    void unshift(double val){
        cout << "Adding the first element" << endl;
        if (length == 0){
            push(val);
        }else{
            nodeptr new_head = new node(val);
            new_head->next = head;
            head->prev = new_head;
            head = new_head;
            head->prev = NULL;
            length++;
        }
    }
    nodeptr get_node_pointer_unoptimized(int index){
        if(length == 0 || index < 0 || index > length-1){
            return NULL;
        }
        nodeptr temp = head;
        for(int i = 0; i < index; i++){
            temp = temp->next;
        }
        return temp;
    }

    nodeptr get_node_pointer_optimized(int index){
        if(length == 0 || index < 0 || index > length-1){
            return NULL;
        }

        if (index <= (length/2)){
            nodeptr temp = head;
            for(int i = 0; i < index; i++){
                temp = temp->next;
            }
            return temp;
        }
        if (index > (length/2)){
            nodeptr temp = tail;
            for(int i = length-1;i > index ; i--){
                temp=temp->prev;
            }
            return temp;
        }
    }

    bool set(int index, double value){
        if (index < 0 || index > length-1 || length == 0){
            return false;
        }
        nodeptr my_node = get_node_pointer_optimized(index);
        my_node->value = value;
        return true;
    }

    bool insert(int index, double value){
        if (length == 0 || index < 0 || index > length){
            return false;
        }
        if (index == 0){
            unshift(value);
            return true;
        }
        if (index == length){
            push(value);
            return true;
        }
        nodeptr new_node = new node(value);
        nodeptr prev_node = get_node_pointer_optimized(index-1);
        new_node->next = prev_node->next;
        new_node->next->prev = new_node;
        prev_node->next = new_node;
        new_node->prev = prev_node;
        length++;
        return true;
    }

    bool remove(int index){
        if (length == 0 || index <0 || index > length-1){
            return false;
        }
        if (index == 0){
            shift();
            return true;
        }
        if (index == length -1){
            pop();
            return true;
        }
        nodeptr prev_node = get_node_pointer_optimized(index-1);
        nodeptr next_node = get_node_pointer_optimized(index+1);
        prev_node->next = next_node;
        next_node->prev = prev_node;
        length--;
        return true;
    }

    void print(){
        nodeptr temp = head;
        cout << "NULL<-";
        for (;temp != NULL;temp=temp->next){
            if (!(temp->next == NULL))
                cout << temp->value << "<->";
            else    
                cout << temp->value << "->";
        }
        cout << "NULL" << endl;
        cout << "Length : " << length << endl;
    }
};

int main(){
    doubly_linked_list list;

    list.push(1.0);
    list.push(2.0);
    list.push(3.0);
    list.pop();
    list.shift();
    list.unshift(1);

    print_node(*(list.get_node_pointer_unoptimized(0)));
    print_node(*(list.get_node_pointer_optimized(1)));

    list.set(1,13);
    list.insert(1,2);
    list.remove(2);

    list.print();

    return 0;
}