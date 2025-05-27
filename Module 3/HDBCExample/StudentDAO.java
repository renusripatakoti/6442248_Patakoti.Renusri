import java.sql.*;

public class StudentDAO {
    private Connection connection;

    public StudentDAO(String dbUrl) throws SQLException {
        connection = DriverManager.getConnection(dbUrl);
    }

    public void insertStudent(Student student) throws SQLException {
        String query = "INSERT INTO students (id, name) VALUES (?, ?)";
        PreparedStatement stmt = connection.prepareStatement(query);
        stmt.setInt(1, student.getId());
        stmt.setString(2, student.getName());
        stmt.executeUpdate();
    }

    public void updateStudentName(int id, String newName) throws SQLException {
        String query = "UPDATE students SET name = ? WHERE id = ?";
        PreparedStatement stmt = connection.prepareStatement(query);
        stmt.setString(1, newName);
        stmt.setInt(2, id);
        stmt.executeUpdate();
    }

    public void displayStudents() throws SQLException {
        String query = "SELECT * FROM students";
        Statement stmt = connection.createStatement();
        ResultSet rs = stmt.executeQuery(query);

        while (rs.next()) {
            int id = rs.getInt("id");
            String name = rs.getString("name");
            System.out.println("ID: " + id + ", Name: " + name);
        }
    }

    public void close() throws SQLException {
        if (connection != null) connection.close();
    }
}
