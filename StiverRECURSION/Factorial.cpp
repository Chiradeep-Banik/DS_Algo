#include<bits/stdc++.h>

using namespace std::chrono;

using namespace std;

long double factorial(double n){
    if(n == 0 || n==1){
        return 1;
    }
    return n*factorial(n-1);
}

long double factorialOptimized(double n,map<double,long double>& store){
    if(n <= 1) return (long double)1;
    if(store.count(n)) return store[n];
    store[n]= n*factorialOptimized(n-1,store);

    return store[n];
}
int main (){

    double n = 200;


    auto start1 = high_resolution_clock::now();
    cout << "Factorial : " << factorial(n)<<endl;
    auto stop1 = high_resolution_clock::now();

    auto duration1 = duration_cast<microseconds>(stop1 - start1);
    cout << "1st Function Duration : " << duration1.count() <<endl;


    map<double,long double> store;
    auto start2 = high_resolution_clock::now();
    cout << "Factorial : " << factorialOptimized(n,store)<<endl;
    auto stop2 = high_resolution_clock::now();
    auto duration2 = duration_cast<microseconds>(stop2 - start2);
    cout << "1st Function Duration : " << duration2.count() <<endl;
    // for(auto i: store) {
    //     cout << i.first <<" : "<< i.second<<endl;
    // }
}