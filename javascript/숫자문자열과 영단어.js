String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

function solution(s) {
    const number = [0,1,2,3,4,5,6,7,8,9];
    const alpha = ["zero","one","two","three","four","five","six","seven","eight","nine"];

    for(let i in alpha){
            s = s.replaceAll(alpha[i],number[i])
        }

    return parseInt(s);
}
