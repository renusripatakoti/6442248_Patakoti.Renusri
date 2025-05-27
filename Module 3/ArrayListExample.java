import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> studentNames = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter student names (type 'exit' to stop):");
        
        while (true) {
            System.out.print("Enter name: ");
            String name = scanner.nextLine();
            if (name.equalsIgnoreCase("exit")) {
                break;
            }
            studentNames.add(name);
        }
        
        System.out.println("\nStudent names entered:");
        for (String student : studentNames) {
            System.out.println(student);
        }
        
        scanner.close();
    }
}
