import java.util.Scanner;
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class AgeChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        try {
            checkAge(age);
            System.out.println("Access granted. You are eligible.");
        } catch (InvalidAgeException e) {
            System.out.println("Access denied: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }

    static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("You must be at least 18 years old.");
        }
    }
}
