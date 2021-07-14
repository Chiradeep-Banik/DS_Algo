#include<iostream>

using namespace std;

class stack{
    private:
        class node{
            public:
                double value;
                node *prev = NULL;

                node(double val){
                    value = val;
                }
        };
    public:
        node* first_element = NULL;
        node* last_element = NULL;
        int length =0;

        int push(double value){
            node* new_node = new node(value);
            if(first_element == NULL){
                first_element = new_node;
                last_element = new_node;
                length++;
                return length;
            }
            new_node->prev = last_element;
            last_element = new_node;
            length++;
            return length; 
        }

        double pop(){
            if(first_element == NULL){
                return -1;
            }
            node* temp = last_element;
            if(length == 1){
                first_element = NULL;
                last_element = NULL;
                length = 0;
                return temp->value;
            }
            last_element = temp->prev;
            length--;
            return temp->value;
        }
};

int main(){
    stack s;

    cout << s.push(1) << endl;
    cout << s.push(2) << endl;
    cout << s.push(3) << endl;

    cout << s.pop() << endl;
    cout << s.pop() << endl;

    return 0;
}
