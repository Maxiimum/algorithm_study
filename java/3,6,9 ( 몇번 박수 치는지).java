import java.util.Scanner;

public class Three_s_n {
  
	public static void main(String args[]) {
    
		Scanner sc = new Scanner(System.in);
		String s = "0";
    
		while (Integer.parseInt(s) != -1) {
			int clab = 0;
			System.out.print("숫자를 입력해주세요 : ");
			s = sc.next();
      
			for (int i = 0; i < s.length(); i++) {
				if (s.charAt(i) == '3' || s.charAt(i) == '6' || s.charAt(i) == '9') {
					clab++;
				}
			}
			System.out.println("짝".repeat(clab));
		}
	}
}
