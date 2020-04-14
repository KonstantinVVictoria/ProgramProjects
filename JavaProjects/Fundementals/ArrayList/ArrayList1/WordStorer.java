import java.util.ArrayList;
import java.util.Scanner;

public class WordStorer
{
    public static void main (String[] args) {
        Scanner reader = new Scanner(System.in);
        String input;
        ArrayList<String> stringList = new ArrayList<String>();
        System.out.println("Please enter a strings separated by a space. Then type [0] at the end when finished");

        do {
            input = reader.next();
            if (!input.equals("[0]")) {
                stringList.add(input);
                System.out.println(input + " added to list.");

            }
        } while (!input.equals("[0]"));

        printList(stringList);
    }

    private static void printList(ArrayList<String> stringList){
        int place = 0;
        System.out.println("List of Strings:");
        for(String word:stringList){
            place++;
            System.out.println(Integer.toString(place) + ") " + word);
        }
    }

}
