import java.util.*;
import java.io.*;

class Graph2 {
	private int v;
	private Queue<Integer> adj[];
	
	Graph2(int v){
		this.v = v;
		adj = new LinkedList[v];
		
		for(int i=0; i<v; i++) {
			adj[i] = new LinkedList();
		}
	}
	
	void addEdge(int v, int w) { adj[v].add(w); }
	
	void BFS(int q) {
		boolean visited[] = new boolean[this.v];
		
		Queue<Integer> queue = new LinkedList<Integer>();
		
		visited[q] = true;
		queue.add(q);
		
		while ( queue.size() !=0 ) {
			q = queue.poll();
			System.out.print(q + "-> ");
			
			Iterator<Integer> i = adj[q].iterator();
			while (i.hasNext()) {
				int n = i.next();
				if (!visited[n]) {
					visited[n] = true;
					queue.add(n);
				}
			}
		}
	}
	
}

public class BFS_Queue {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Graph2 g2 = new Graph2(9);
		
		g2.addEdge(0, 1);
		g2.addEdge(0, 2);
		g2.addEdge(0, 3);
		g2.addEdge(0, 4);
		g2.addEdge(1, 0);
		g2.addEdge(1, 5);
		g2.addEdge(1, 6);
		g2.addEdge(2, 0);
		g2.addEdge(3, 0);
		g2.addEdge(4, 0);
		g2.addEdge(4, 7);
		g2.addEdge(5, 1);
		g2.addEdge(6, 1);
		g2.addEdge(7, 4);
		g2.addEdge(7, 8);
		g2.addEdge(8, 7);
		
		g2.BFS(2);
		System.out.println();
		g2.BFS(0);
		System.out.println();
		g2.BFS(6);

	}

}
