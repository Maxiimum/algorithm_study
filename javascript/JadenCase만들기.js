function solution(s) {
    let arr = s.split('');
    let bool = true;
    
    for (let i in arr){
        if (arr[i] !== ' ' && bool){
            arr[i] = arr[i].toUpperCase();
            bool = false;
        } else if (arr[i] !== ' ' && !bool){
            arr[i] = arr[i].toLowerCase();
        }
        if (arr[i] === ' '){
            bool =true;
        }
         
    }
    return arr.join('');
}
