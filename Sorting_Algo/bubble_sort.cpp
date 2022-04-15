#include<iostream>

using namespace std;

void swap(int *a,int *b){
    int* temp = a;
    b= a;
    a = temp;
}

void print_arr(int arr[],int n){
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}

int* bubble_sort(int arr[],int n){
    for (int i = n; i >0; i--){
        for (int j = 0; j < i; j++){
            if(*(arr+j)>*(arr+j+1)){
                swap(*(arr+j+1),*(arr+j));
            }
        }
    }
    
    return arr;
}

int main(){
    int array[7] = {4,1,2,5,3,6,123};
    cout << "Before sorting: ";
    print_arr(array,7);
    cout << "After sorting: ";
    int* ans = bubble_sort(array,7);
    print_arr(ans,7);
    return 0;
}