class Car {
    // Attributes
    String make;
    String model;
    int year;

    // Method to display car details
    void displayDetails() {
        System.out.println("Car Make: " + make);
        System.out.println("Car Model: " + model);
        System.out.println("Manufacturing Year: " + year);
        System.out.println("------------------------------");
    }
}

public class CarDemo {
    public static void main(String[] args) {
        // Create first Car object
        Car car1 = new Car();
        car1.make = "Toyota";
        car1.model = "Camry";
        car1.year = 2022;

        // Create second Car object
        Car car2 = new Car();
        car2.make = "Tesla";
        car2.model = "Model 3";
        car2.year = 2023;

        // Call method to display details
        System.out.println("Car 1 Details:");
        car1.displayDetails();

        System.out.println("Car 2 Details:");
        car2.displayDetails();
    }
}
