public class PatternMatchingSwitchExample {

    // Method to determine the type of an object using pattern matching in switch
    public static void checkObjectType(Object obj) {
        String result = switch (obj) {
            case Integer i -> "Integer with value " + i;
            case String s -> "String with value \"" + s + "\"";
            case Double d -> "Double with value " + d;
            case null -> "Null value";
            default -> "Unknown type: " + obj.getClass().getSimpleName();
        };
        System.out.println(result);
    }

    public static void main(String[] args) {
        checkObjectType(100);            // Integer
        checkObjectType("Hello World");  // String
        checkObjectType(3.14159);        // Double
        checkObjectType(true);            // Unknown type (Boolean)
        checkObjectType(null);            // Null value
    }
}
