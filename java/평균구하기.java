class Solution {
    public double solution(int[] arr) {
        double answer = 0;
        
        for(double in_arr : arr){   //자바 foreach문
            answer += in_arr;
        }
        return answer/arr.length;
    }
}
