#include<iostream>

using namespace std;

class queue{
    private:
        class node{
            public:
                double value;
                node *next = NULL;

                node(double val){
                    value = val;
                }
        };
    public:
        node* first_element = NULL;
        node* last_element = NULL;
        int length =0;

        int en_queue(double value){
            node* new_node = new node(value);
            if(first_element == NULL){
                first_element = new_node;
                last_element = new_node;
                length++;
                return length;
            }
            last_element->next = new_node;
            last_element = new_node;
            length++;
            return length; 
        }

        double de_queue(){
            if(first_element == NULL){
                return -1;
            }
            node* temp = first_element;
            if(length == 1){
                first_element = NULL;
                last_element = NULL;
                length = 0;
                return temp->value;
            }
            first_element = first_element->next;
            length--;
            return temp->value;
        }
};

int main(){
    queue s;

    cout << s.en_queue(1) << endl;
    cout << s.en_queue(2) << endl;
    cout << s.en_queue(3) << endl;

    cout << s.de_queue() << endl;
    cout << s.de_queue() << endl;

    return 0;
}
