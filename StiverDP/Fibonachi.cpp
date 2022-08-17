#include<bits/stdc++.h>

using namespace std;

// map<int,long double> store;

//Using recursion --- space complexity O(2n)
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
    // cout << "store["<<n<<"] : " << store[n] << endl;
    return store[n];
}

//Fibo using tabulation --- space complexity O(n)
long double fiboT(int n){
    static vector<long double> storeT(n+1,-1);
    storeT[0] = 0;
    storeT[1] = 1;
    for(int i=2;i<n+1;i++){
        storeT[i] = storeT[i-1]+ storeT[i-2];
    }

    return storeT[n];
}

//Fibo with only to variables -- space complexity O(1)
long double fiboV(int n){
    long double n_0 = 0;
    long double n_1 = 1;
    long double res;
    for(int i =2;i<n+1 ;i++){
        res = n_0+n_1;
        n_0 = n_1;
        n_1 = res;
    }
    return res;
}

int main(){
    cout << "Result recD : " << fibo(100) << endl;
    cout << "Result tabD : " << fiboT(100) << endl;
    cout << "Result tabV : " << fiboV(100) << endl;
}