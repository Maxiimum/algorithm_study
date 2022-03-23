function solution(board, moves) {
    let arr = [0];
    let pang = 0;

    for (let i=0; i<moves.length; i++){
        let k = moves[i]-1;
        
        for (let j=0; j<board.length; j++){
            if(board[j][k]){
                if(arr[arr.length-1] === board[j][k]){
                    arr.pop();
                    pang++;
                } else {
                    arr.push(board[j][k]);
                }
                board[j][k] = 0;
                break;
            }
        }
        
    }
    
    return pang*2;
    
}
