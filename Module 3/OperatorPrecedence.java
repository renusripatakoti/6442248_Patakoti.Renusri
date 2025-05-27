// OperatorPrecedence.java
public class OperatorPrecedence {
    public static void main(String[] args) {
        // Expression 1
        int result1 = 10 + 5 * 2;
        // Multiplication (*) has higher precedence than addition (+)
        // So, 5*2 = 10, then 10 + 10 = 20

        System.out.println("Result of 10 + 5 * 2 = " + result1);

        // Expression 2
        int result2 = (10 + 5) * 2;
        // Parentheses change precedence: (10+5)=15, then 15*2=30

        System.out.println("Result of (10 + 5) * 2 = " + result2);

        // Expression 3
        int result3 = 20 / 5 + 3 * 2 - 1;
        // Division and multiplication have same precedence, evaluated left to right:
        // 20/5=4, 3*2=6, then addition and subtraction left to right:
        // 4 + 6 -1 = 9

        System.out.println("Result of 20 / 5 + 3 * 2 - 1 = " + result3);

        // Expression 4
        int result4 = 10 + 12 / (2 * 3) - 4;
        // Parentheses first: 2*3=6, then 12/6=2
        // Then addition and subtraction left to right:
        // 10 + 2 - 4 = 8

        System.out.println("Result of 10 + 12 / (2 * 3) - 4 = " + result4);
    }
}
