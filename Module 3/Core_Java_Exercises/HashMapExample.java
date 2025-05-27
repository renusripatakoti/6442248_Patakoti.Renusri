import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter student ID and name (type 'stop' to finish):");

        while (true) {
            System.out.print("Enter student ID (integer): ");
            String input = scanner.nextLine();
            if (input.equalsIgnoreCase("stop")) {
                break;
            }

            try {
                int id = Integer.parseInt(input);

                System.out.print("Enter student name: ");
                String name = scanner.nextLine();

                studentMap.put(id, name);
            } catch (NumberFormatException e) {
                System.out.println("Invalid ID. Please enter an integer.");
            }
        }

        System.out.print("\nEnter a student ID to search: ");
        int searchId = scanner.nextInt();

        if (studentMap.containsKey(searchId)) {
            System.out.println("Student name: " + studentMap.get(searchId));
        } else {
            System.out.println("No student found with ID " + searchId);
        }

        scanner.close();
    }
}
