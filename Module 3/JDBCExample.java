import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCExample {

    public static void main(String[] args) {
        // Database credentials and URL
        String url = "jdbc:mysql://localhost:3306/your_database_name";  // Replace with your DB name
        String user = "your_username";                                 // Replace with your DB username
        String password = "your_password";                             // Replace with your DB password

        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            // Load the MySQL JDBC driver (optional for newer JDBC versions)
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish connection
            conn = DriverManager.getConnection(url, user, password);

            // Create a statement object
            stmt = conn.createStatement();

            // Execute a SELECT query
            String sql = "SELECT id, name, age FROM students";
            rs = stmt.executeQuery(sql);

            // Process the result set
            System.out.println("ID | Name | Age");
            System.out.println("------------------");
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");

                System.out.println(id + " | " + name + " | " + age);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Close resources in reverse order of creation
            try { if (rs != null) rs.close(); } catch (Exception e) { /* ignored */ }
            try { if (stmt != null) stmt.close(); } catch (Exception e) { /* ignored */ }
            try { if (conn != null) conn.close(); } catch (Exception e) { /* ignored */ }
        }
    }
}
