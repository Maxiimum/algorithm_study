function solution(n, arr1, arr2) {
    let result = [];
    let con = [];

    for (let i in arr1){
        con[i] = arr1[i]|arr2[i];
        con[i] = con[i].toString(2).padStart(n,'0');
        result[i] = con[i].replace(/1/g,"#").replace(/0/g," ");
    }
        return result;
}
