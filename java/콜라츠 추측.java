class Solution {
    public int solution(int num) {
        if(num==1) return 0;
        
        for(int i=0; i<500; i++){
            if(i==499) return -1;
            
            if(num%2==0) num /=2;
            else if(num%2==1) num = num*3+1;
            
            if(num==1) return i+1; 
        }
        return 0;
        
    }
}
