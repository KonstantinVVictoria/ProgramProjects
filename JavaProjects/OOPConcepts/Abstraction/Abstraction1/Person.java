package OOPConcepts;

public class Person
{
    static private int pNumber = 0;
    private int pID;
    public int age;
    private String type;
    public String fName, lName;

    Person()
    {
        pNumber++;
        pID = pNumber;

        System.out.println("Enter first name:");
        String fName = test1.input.next();
        System.out.println("Enter last name:");
        String lName = test1.input.next();
        System.out.println("Enter age:");
        int age = test1.input.nextInt();
        type = "person";
        describe(fName, lName, age);

        System.out.println("Made a " + type);
    }
    public void setType(String type){
        this.type = type;
    }
    public String getType()
    {
        return this.type;
    }
    public void describe(String fName, String lName, int age)
    {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        System.out.println("Name: " + this.fName + " " + this.lName + "|Age: " + this.age);
    }
}
