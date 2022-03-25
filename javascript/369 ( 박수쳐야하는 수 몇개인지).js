function tsn(n){
    let clab = 0;
    
    for (let i=1; i<=n; i++){
        
        if(i.toString().match(/3|6|9/g)){clab++;}
    }
    return clab;
}
