import java.util.Scanner;

public class SecondProg
{
	public static void main(String[] args)
	{
	Scanner input = new Scanner(System.in);

	System.out.println("Mr. Mitchell is cool.");
	System.out.println("Mr. Mitchell is awesome.");
	System.out.println("Mr. Mitchell is _____.");
	System.out.println("Now it's your turn to fill in the blanks:");
	String word = input.next();
	System.out.printf("Mr. Mitchell is %s.", word);
	}
}