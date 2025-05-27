// Base class
class Animal {
    void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

// Subclass
class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Bark");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        // Instantiate Animal class
        Animal genericAnimal = new Animal();
        genericAnimal.makeSound(); // Output: Some generic animal sound

        // Instantiate Dog class
        Dog dog = new Dog();
        dog.makeSound(); // Output: Bark
    }
}
