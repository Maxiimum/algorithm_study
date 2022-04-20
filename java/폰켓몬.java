import java.util.HashSet;

class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        
        HashSet<Integer> gobook = new HashSet<Integer>();
        
        for(int i=0; i<nums.length; i++){
            gobook.add(nums[i]);
        }
        
        answer = gobook.size() <= nums.length/2
        ? gobook.size()
        : nums.length/2;
        
        return answer;
    }
}
