#include <bits/stdc++.h>

using namespace std;

int recCall(int index,vector<int>&  height){
    static vector<int> store(index+1,-1);

    if(index == 0){
        return 0;
    }
    if(store[index] != -1){
        // cout << "Dp" << endl;
        return store[index];
    }
    int left = 0;
    int right = 0;
    if(index >1){
        left = recCall(index-1,height) +abs(height[index] - height[index-1]); 
    
        right = recCall(index-2,height) +abs(height[index] - height[index-2]); 
    }
    store[index] = min(left,right);

    return store[index];
}

int frogJump( int n,vector<int>& height ){
    return recCall(n-1,height);
}

int main(){
    vector<int> height = {30,10,60,10,60,50}; 

    cout << "Min : " << frogJump(6,height) << endl;
}