// TypeCastingExample.java
public class TypeCastingExample {
    public static void main(String[] args) {
        double myDouble = 9.78;
        int myInt = (int) myDouble;  // Explicit casting: double to int

        System.out.println("Original double value: " + myDouble);
        System.out.println("After casting to int: " + myInt);

        int myInt2 = 42;
        double myDouble2 = myInt2;   // Implicit casting: int to double

        System.out.println("Original int value: " + myInt2);
        System.out.println("After casting to double: " + myDouble2);
    }
}
