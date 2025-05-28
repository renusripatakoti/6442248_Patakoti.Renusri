public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;

        System.out.println("Result of 10 + 5 * 2 = " + result1);

        int result2 = (10 + 5) * 2;

        System.out.println("Result of (10 + 5) * 2 = " + result2);

        int result3 = 20 / 5 + 3 * 2 - 1;

        System.out.println("Result of 20 / 5 + 3 * 2 - 1 = " + result3);

        int result4 = 10 + 12 / (2 * 3) - 4;

        System.out.println("Result of 10 + 12 / (2 * 3) - 4 = " + result4);
    }
}
