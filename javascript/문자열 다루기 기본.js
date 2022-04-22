function solution(s) {

    if (s.length === 4 || s.length === 6){
        let result = s.split("").map(Number);

        for (let i in result){
            if (Number.isNaN(result[i])){
                return false;
            }
        }

        return true;
    }
    return false;

}
