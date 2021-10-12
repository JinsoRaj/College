//7. Write a java program to demonstrate inheritance.

class Parent{
    public void par1(){
        System.out.println("Parent fn");
    }
}
public class Child extends Parent {

    public void child1(){
        System.out.println("Child fn");
    }
    public static void main(String[] args){
        Child childobj = new Child();
        childobj.child1();
        childobj.par1();
    }
}