#include<bits/stdc++.h>

using namespace std;

int fibo(int n){
    if(n<=1){
        return 1;
    }
    return fibo(n-2) + fibo(n-1);
}

int main (){
    cout << "Fibo : ";
    for(int i =0;i<13;i++){
        cout << fibo(i) << " ";
    }
    cout << endl;
}