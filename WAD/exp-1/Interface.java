//5. Write a java program to demonstrate interface.

interface Department {
    public void students();
    public void faculties();
}

class IT implements Department{
    public void students() {
        System.out.println("72 students");
    }
    public void faculties(){
        System.out.println("42 faculties");
    }
}

public class Interface {
    public static void main(String[] args) {
        IT i = new IT();
        i.students();
        i.faculties();
    }
}
