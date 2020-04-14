import java.util.Scanner;
public class ThreadSleep
{
	public static void main(String[] args) throws Exception
	{
	String dots = "";
	for(int i = 1; i <= 25; i++)
	{
		if(i % 5 != 0)
		{
			dots += ".";
		} 
		else
		{
			dots = "";
		}
		System.out.println(dots);
		Thread.sleep(200);
		System.out.print("\033[H\033[2J");

	}	

	}

}