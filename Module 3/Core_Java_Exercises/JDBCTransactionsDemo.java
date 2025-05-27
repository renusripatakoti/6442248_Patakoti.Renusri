import java.sql.*;

public class JDBCTransactionDemo {

    static final String DB_URL = "jdbc:mysql://localhost:3306/bank";
    static final String USER = "root"; // Change to your MySQL username
    static final String PASS = "password"; // Change to your MySQL password

    public static void main(String[] args) {
        transferMoney(1, 2, 200); // Transfer 200 from Alice (id=1) to Bob (id=2)
    }

    public static void transferMoney(int fromAccountId, int toAccountId, double amount) {
        Connection conn = null;
        PreparedStatement debitStmt = null;
        PreparedStatement creditStmt = null;

        try {
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            conn.setAutoCommit(false); // Begin transaction

            // Step 1: Debit from sender
            debitStmt = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            debitStmt.setDouble(1, amount);
            debitStmt.setInt(2, fromAccountId);
            int debitResult = debitStmt.executeUpdate();

            // Step 2: Credit to receiver
            creditStmt = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
            creditStmt.setDouble(1, amount);
            creditStmt.setInt(2, toAccountId);
            int creditResult = creditStmt.executeUpdate();

            // If both updates are successful
            if (debitResult == 1 && creditResult == 1) {
                conn.commit();
                System.out.println("Transaction Successful! Money Transferred.");
            } else {
                conn.rollback();
                System.out.println("Transaction Failed! Rolled Back.");
            }

        } catch (SQLException e) {
            try {
                if (conn != null) conn.rollback();
                System.out.println("Exception Occurred! Rolled Back. " + e.getMessage());
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        } finally {
            try {
                if (debitStmt != null) debitStmt.close();
                if (creditStmt != null) creditStmt.close();
                if (conn != null) conn.setAutoCommit(true);
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
