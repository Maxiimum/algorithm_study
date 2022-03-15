process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for ( let i=0; i<b; i++){
        let result = "";
        result += '*'.repeat(a);
        
        console.log(result);
    } 
    
    
});
