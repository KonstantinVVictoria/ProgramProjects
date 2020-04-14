package OOPConcepts;

public class Student extends Person{
    static private int sNumber = 0;
    private int studentID;
    public String major;

    Student()
    {
        setType("student");
        System.out.println("Who is also a " + getType());
        System.out.println("Enter major: ");
        String major = test1.input.next();
        this.major = major;

        sNumber++;
        studentID = sNumber;
    }
    public void setStudentID(int idNumber)
    {
        this.studentID = idNumber;
    }
    public int getStudentID()
    {
        return this.studentID;
    }
}
