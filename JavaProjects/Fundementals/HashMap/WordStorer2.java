import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class WordStorer2
{

	public static void main(String[] args)
	{
		Scanner reader = new Scanner(System.in);
		int input = 0;
		ArrayList<Integer> intList = new ArrayList<Integer>();
		System.out.println("Enter a positive integer. Enter -1 to finish");	
	
		do
		{
			input = reader.nextInt();
			if (input != -1)
			{
				intList.add(input);
			}
		}
		while ((input != - 1));
		for (int i = 1; i <= 2; i++)
		{
			Collections.shuffle(intList);
		}
		for(int number:intList)
		{
			System.out.println(number);
		}
	}

}