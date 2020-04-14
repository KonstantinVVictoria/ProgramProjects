import java.util.Scanner;
public class AverageCalculator
{
	public static void main(String[] args)
	{
	Scanner input = new Scanner(System.in);
	int x, y, z;
	System.out.println("Enter three numbers|");

	System.out.println("First number: ");
	x = input.nextInt();

	System.out.println("Second number: ");
	y = input.nextInt();

	System.out.println("Third number: ");
	z = input.nextInt();
	
	System.out.printf("The average of these three numbers is %.2f", average(x, y, z));

	input.close();
	}

	public static double average(double x, double y, double z)
	{
	return (x + y + z) / 2.0;
	}

}