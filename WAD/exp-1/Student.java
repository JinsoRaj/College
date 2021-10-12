// Qn3: User defined class
//run   javac Student.java
//      java Student


public class Student {
    String name;
    int roll;
    String dep;

    
    public Student(int roll, String name, String dep) {
        this.name = name;
        this.roll = roll;
        this.dep = dep;
    }


    public void display(){
        System.out.printf("ROLL NO: %d\tName: %s\tDepartment: %s\n", roll, name, dep);;
    }


    public static void main(String[] args) {
        Student stud = new Student(1, "Jinso", "IT");
        stud.display();
    }
    
}