public class Lotto{

	public static void main(String[] args) {
		
		// 각각 배열과 비교하여 중복제거
		int [] lotto = new int[6];
		
		for(int i=0; i<6; i++) {
			
			int num = (int) (Math.random()*45)+1;
			
			lotto[i] = num;
			for(int j=0; j<i; j++) {
				if(lotto[i] ==lotto[j]) {
					i--;
					break;
				}
			}
		}
		Arrays.sort(lotto);
		
		System.out.println(Arrays.toString(lotto));
		
		
		
		// Set을 이용한 중복제거
		Set<Integer> set = new HashSet<Integer>();
		
		while(set.size()<6) {
			
			int num = (int) (Math.random()*45)+1;
			set.add(num);
		}
		List<Integer> list = new ArrayList<Integer>(set);

		Collections.sort(list);
		
		for(int i=0; i<list.size(); i++) {
			System.out.print(list.get(i) + " " );
		}
	

	}

}
