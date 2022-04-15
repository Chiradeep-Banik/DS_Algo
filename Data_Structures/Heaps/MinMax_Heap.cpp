/**
 * General opperations 
 *      - getMin() -- return the minimum element
 *      - getMax() -- return the maximum element
 *      - extractMin() -- return and remove the minimum element - O(log n)
 *      - extractMax() -- return and remove the maximum element - O(log n)
 *      - insert(x) -- insert an element into the heap - O(log n)
 *      - delete(x) -- delete an element from the heap - O(log n)
 *      - heapify() -- re-transform a heap - O(n)
*/
#include <iostream>
#include <math.h>

using namespace std;

class Min_Heap{
    private:    
    public:
        int *heap_array; //pointer of our dynamic array
        int capacity; // the maximum capacity of the heap --- will be assigned at runtime
        int heap_size; // the actual size of the heap

        Min_Heap(int cap){
            heap_size = 0;
            capacity = cap;
            heap_array = new int[cap];
        }
        void linear_search(int val){
            for(int i = 0; i < heap_size; i++){
                if(heap_array[i] == val){
                    cout<<"Element Found" <<endl;
                    break;
                }
            }
            cout << "Element Not Found" << endl;
        }
        void print_array(){
            for(int i = 0; i < heap_size; i++){
                cout << heap_array[i] << " ";
            }
            cout << endl;
        }
        int height(){
            return (int)ceil(log2(heap_size+1))-1;
        }
        int get_parent(int i){
            return floor((i-1)/2);
        }
        int get_left_child(int i){
            return 2*i+1;
        }
        int get_right_child(int i){
            return 2*i+2;
        }
        void swap(int a, int b){
            int temp = heap_array[a];
            heap_array[a] = heap_array[b];
            heap_array[b] = temp;
        }
        void insert(int val){
            if(heap_size == capacity){
                cout << "Overflow:Heap is full" << endl;
            }
            else{
                int i = heap_size;
                heap_size++;
                heap_array[i] = val;
                while(i != 0 && heap_array[get_parent(i)] > heap_array[i]){
                    if(heap_array[get_parent(i)] > heap_array[i]){
                        swap(i, get_parent(i));
                        i = get_parent(i);
                    }
                }
            }
        }
};

int main(){
    Min_Heap* m_heap = new Min_Heap(10);
    m_heap->insert(13);
    m_heap->print_array();
    m_heap->insert(45);
    m_heap->print_array();
    m_heap->insert(11);
    m_heap->print_array();
    m_heap->insert(33);
    m_heap->print_array();
    m_heap->insert(7);
    m_heap->print_array();
    cout <<m_heap->height()<<endl;
}
