#include<bits/stdc++.h>

using namespace std;

// map<int,long double> store;
long double fibo(int n){
    static vector<long double> store(n+1,-1);
    if(n<2){
        return 1;
    }
    // if(store.find(n) == store.end()){
    //     store[n] = fibo(n-1) + fibo(n-2);
    // }
    if(store[n] == -1){
        store[n] = fibo(n-1) + fibo(n-2);
    }
    cout << "store["<<n<<"] : " << store[n] << endl;
    return store[n];
}

int main(){
    cout << "Result : " << fibo(100) << endl;
}