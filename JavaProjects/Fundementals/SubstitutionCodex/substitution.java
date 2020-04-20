import java.util.Scanner;
public class substitution
{
    final static int lowerCaseOffset = 97 - 65;
    public static void main(String[] args)
    {
        Scanner reader = new Scanner(System.in);
        String input = reader.nextLine();
        String codex = "VCHPRZGJNTLSKFBDQWAXEUYMOI";
        for(int i = 0; i < input.length(); i++)
        {
            char letter = input.charAt(i);

            if (letter >= 65 && letter <= 90)
            {
                System.out.print(codex.charAt((int)letter - 65));
            }
            else if (letter >= 65 + lowerCaseOffset && letter <= 90 + lowerCaseOffset)
            {
                System.out.print((char) (codex.charAt((int)letter - (65 + lowerCaseOffset)) + lowerCaseOffset));
            }
            else
            {
                System.out.print(letter);
            }

        }
    }
}