function sockMerchant(n, ar) {
    var match_obj = {};
    for(let i = 0 ; i < n ; i++){
        if (match_obj[ar[i]] > 0)
            match_obj[ar[i]]++;
        else
            match_obj[ar[i]] = 1;
    }
    var count = 0;
    for(keys in match_obj){
        count = count + Math.floor(match_obj[keys]/2);
    }
    return count;
}

console.log(sockMerchant(10,[10,20,20,10,10,30,50,10,20,30]));