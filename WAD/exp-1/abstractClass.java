//4. Write a java program to demonstrate abstract class.

abstract class Department{
    public abstract void faculties();
    public void students() {
        System.out.println("72 students");
    }
}

class IT extends Department {
    public void faculties(){
        System.out.println("42 faculties");
    }
}
class EEE extends Department {
    public void faculties(){
        System.out.println("46 faculties");
    }
}

public class abstractClass {

    public static void main(String[] args) {
        IT i = new IT();
        EEE e = new EEE();

        i.students();
        i.faculties();
        e.students();
        e.faculties();

    }
}