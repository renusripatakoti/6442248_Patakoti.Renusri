import java.util.Scanner;

public class StringReversal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        // Reverse using StringBuilder
        String reversed = new StringBuilder(input).reverse().toString();

        // Display result
        System.out.println("Reversed string: " + reversed);

        scanner.close();
    }
}
