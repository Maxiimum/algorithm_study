import java.util.PriorityQueue;

class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        int i = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        while(i < scoville.length){
            pq.add(scoville[i]);
            i++;
        }
        
        while(pq.size() >1 && pq.peek() < K){
            int first = pq.peek();
            pq.poll();
            int second = pq.peek();
            pq.poll();
            
            pq.add(first+(second*2));
            answer ++;
        }
        
        if(pq.peek() < K) return -1;
        
        return answer;
    }
}
