function solution(phone_number) {
    let pn = phone_number.split("");

    for (let i = 0; i < pn.length-4; i++){

        pn[i] = '*';
    }

    return pn.join("");
}
