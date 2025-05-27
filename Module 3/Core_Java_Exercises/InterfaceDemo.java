// Define the interface
interface Playable {
    void play(); // abstract method
}

// Implementing the interface in Guitar class
class Guitar implements Playable {
    public void play() {
        System.out.println("Strumming the guitar...");
    }
}

// Implementing the interface in Piano class
class Piano implements Playable {
    public void play() {
        System.out.println("Playing the piano keys...");
    }
}

// Main class to test
public class InterfaceDemo {
    public static void main(String[] args) {
        Playable guitar = new Guitar();
        Playable piano = new Piano();

        guitar.play(); // Output: Strumming the guitar...
        piano.play();  // Output: Playing the piano keys...
    }
}
