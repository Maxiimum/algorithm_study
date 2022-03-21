function solution(array, commands) {
    let result = [];
    
    for (let x=0; x<commands.length; x++){
        let i = commands[x][0]-1;
        let j = commands[x][1];
        let k = commands[x][2];
        
        let tmp = array.slice(i,j).sort( (a,b) => {return a-b});
        result.push(tmp[k-1]);
    }
    return result;
}
