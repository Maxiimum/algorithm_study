function solution(s) {

    let arr = s.split(" ");
    let str = [];

    arr.sort( (a,b)=> { return a-b});

    str.push(arr[0]);
    str.push(arr[arr.length-1]);

    return str.join(" ");

}
