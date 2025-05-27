import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaSort {
    public static void main(String[] args) {
        // Create a List of strings
        List<String> names = new ArrayList<>();
        names.add("John");
        names.add("Alice");
        names.add("Bob");
        names.add("Diana");
        names.add("Charlie");

        System.out.println("Before sorting: " + names);

        // Sort the list using lambda expression (alphabetical order)
        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));

        // Alternatively, you can just use:
        // names.sort((s1, s2) -> s1.compareTo(s2));

        System.out.println("After sorting: " + names);
    }
}
