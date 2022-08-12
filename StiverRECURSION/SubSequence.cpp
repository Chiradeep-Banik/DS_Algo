#include<bits/stdc++.h>

using namespace std;
int co = 0;

void printSub(string s,vector<char> &container,int index){
    if(index >= s.size()){
        for(auto i:container){
            cout << i << " ";
        }
        cout << endl;
        co++;
        return;
    }
    printSub(s,container,index+1);

    container.push_back(s[index]);
    printSub(s,container,index+1);
    container.pop_back();
}

bool printFirstSub(string s,vector<char> &container,int index){
    if(index >= s.size()){
        if(container.size() == 3){
            for(auto i:container){
                cout << i << " ";
            }
            cout << endl;
            co++;
            return true;
        }else{
            return false;
        }
    }
    if(printFirstSub(s,container,index+1) == true){
        return true;
    }

    container.push_back(s[index]);
    if(printFirstSub(s,container,index+1)==true){
        return true;
    }
    container.pop_back();

    return false;
}

int printNumSub(string s,vector<char> &container,int index){
    if(index >= s.size()){
        if(container.size() == 2){
            return 1;
        }else{
            return 0;
        }
    }
    int left = printNumSub(s,container,index+1);

    container.push_back(s[index]);
    int right = printNumSub(s,container,index+1);

    container.pop_back();

    return left+right;
}


int main(){
    string s = "abcde";
    vector<char> con = {};
    printSub(s,con,0);
    con = {};
    cout << endl << "printFirstSub : ";
    printFirstSub(s,con,0);
    con = {};
    cout<<endl<< "printNumSub : " << printNumSub(s,con,0)<<endl;
}