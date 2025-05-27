// ThreadExample.java

class MessageThread extends Thread {
    private String message;

    public MessageThread(String message) {
        this.message = message;
    }

    @Override
    public void run() {
        // Print the message 5 times with a small delay
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + message);
            try {
                Thread.sleep(500); // Sleep for 500 milliseconds
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MessageThread t1 = new MessageThread("Hello from Thread 1");
        MessageThread t2 = new MessageThread("Hello from Thread 2");

        t1.setName("Thread-1");
        t2.setName("Thread-2");

        t1.start();
        t2.start();
    }
}
