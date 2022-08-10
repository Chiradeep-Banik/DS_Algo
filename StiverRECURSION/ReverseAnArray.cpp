#include<bits/stdc++.h>

using namespace std;

void rev(int left,int right,vector<int> arr){
    if(left>=right){
        return;
    }
    int temp = arr[left];
    arr[left] = arr[right];
    arr[right]= temp;
    rev(left+1,right-1,arr);
}

int main(){
    vector<int> arr = {1,2,4,24,13};
    cout << "Before : ";
    for(int i : arr){
        cout << i << " ";
    }
    rev(0,arr.size()-1,arr);
    cout <<endl<< "After :  ";
        for(int i : arr){
        cout << i << " ";
    }
    cout << endl;
}