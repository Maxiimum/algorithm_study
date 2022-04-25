class Solution {
    public int solution(int N) {
        // write your code in Java SE 8
        String bin = Integer.toBinaryString(N);
        char[] arr = bin.toCharArray();

        int one_cnt = 0;
        int zero_cnt = 0;
        int max= 0;
        for(char c : arr){
            if(c == '1'){
                one_cnt++;
                zero_cnt = 0;
            } else {
                zero_cnt++;
                if(zero_cnt > max)
                    max = zero_cnt;
            }
        }
        if(one_cnt < 2) return 0;

        return max;
    }
}
