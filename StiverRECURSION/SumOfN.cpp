#include<bits/stdc++.h>

using namespace std;

//Parameterized
int SumP(int n, int sum){
    static int i=1;
    if(i>n){
        return sum;
    }
    sum+=i;
    cout << "i : " << i << endl;
    cout << "Sum : " << sum << endl;
    i++;
    return SumP(n,sum);
}

//Functional
int SumF(int n){
    if(n == 0){
        return 0;
    }
    return n+SumF(n-1);
}

int main(){
    int sum1 = SumP(13,0);
    cout << "res sumP: " << sum1 << endl ;
    int sum2 = SumF(13);
    cout << "res sumF: " << sum2 << endl ;
}