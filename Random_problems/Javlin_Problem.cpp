#include<iostream>
#include <algorithm>
#include <unordered_map>
#include <vector> 

using namespace std;

int main(){
    int t;
    cin>>t;
    while (t){
        int number_of_players =0,qualification_distance = 0,no_of_players_to_qualify = 0; ; 
        cin >> number_of_players >> qualification_distance >> no_of_players_to_qualify;
        int players[number_of_players];
        unordered_map<int,int> player_index;
        vector<int> result;
        for (int i = 0; i < number_of_players; i++){
            cin >> players[i];
            player_index[players[i]] = i;
        }
        //5999 5998 6000 6001
        //7999 7998 8000
        sort(players,players+number_of_players);
        //5998 5999 6000 6001
        //7998 7999 8000
        for(int j = number_of_players-1;j>=0;j--){
            if(players[j] > qualification_distance){
                result.push_back(players[j]);
                no_of_players_to_qualify--;
            }else{
                if(no_of_players_to_qualify <= 0){
                    break;
                }else{
                    result.push_back(players[j]);
                    no_of_players_to_qualify--;
                }
            }
        }
        cout<<result.size()<<endl;
        cout<<result.size();
        for(int k = 0;k<result.size();k++){
            result[k]=player_index[result[k]]+1; 
        }
        sort(result.begin(),result.end());
        for(int l = 0;l<result.size();l++){
            cout<<" " << result[l];
        }
        cout << "\n";
        t--;
    }
    
    return 0;
}