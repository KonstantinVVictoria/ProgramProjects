import java.util.Scanner;
import java.util.ArrayList;

public class ArrayListInteger{
	
	public static void main (String[] args){
		Scanner reader = new Scanner(System.in);
		ArrayList<Integer> intList = new ArrayList<Integer>();
		int input = 0;
	
		do{
			System.out.println("Enter a positive Integer. Enter -1 to stop");
			input = reader.nextInt();
			if (!(input == -1)) {
				intList.add(input);
			}
		} while (!(input == -1));
	
		printResults(intList);
		intList.remove(Integer.valueOf("1"));
		printResults(intList);
	}

	public static void printResults(ArrayList<Integer> intList){
	
		int place = 0;

		for (int number:intList){
			place++;
			System.out.println(Integer.toString(place) + ") " + Integer.toString(number));
		}
		System.out.println();
	}

}