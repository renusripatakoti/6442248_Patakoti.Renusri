public class TypeCastingExample {
    public static void main(String[] args) {
        double d = 9.78;
        int i = (int) d;  

        System.out.println("Original double value: " + d);
        System.out.println("After casting to int: " + i);

        int i2 = 42;
        double d2 = i2;   

        System.out.println("Original int value: " + i2);
        System.out.println("After casting to double: " + d2);
    }
}
