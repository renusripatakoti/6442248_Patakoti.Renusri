import java.sql.*;

public class Main {
    public static void main(String[] args) {
        try {
            String dbUrl = "jdbc:sqlite:students.db"; // For SQLite
            StudentDAO dao = new StudentDAO(dbUrl);

            Student student1 = new Student(1, "Alice");
            Student student2 = new Student(2, "Bob");

            dao.insertStudent(student1);
            dao.insertStudent(student2);

            dao.updateStudentName(1, "Alicia");

            System.out.println("Student Records:");
            dao.displayStudents();

            dao.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
