import java.util.List;
import java.util.stream.Collectors;

public class PersonRecordExample {

    // Define a record named Person with name and age
    public record Person(String name, int age) {}

    public static void main(String[] args) {
        // Create instances of Person
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Bob", 17);
        Person p3 = new Person("Charlie", 30);

        // Print the records
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);

        // Use records in a List
        List<Person> people = List.of(p1, p2, p3);

        // Filter persons whose age is 18 or older using Streams
        List<Person> adults = people.stream()
                                   .filter(person -> person.age() >= 18)
                                   .collect(Collectors.toList());

        System.out.println("Adults (age >= 18): " + adults);
    }
}
