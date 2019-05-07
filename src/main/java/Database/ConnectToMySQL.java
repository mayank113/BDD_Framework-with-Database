package Database;
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.sql.Statement;

import java.sql.*;
import java.util.ArrayList;
public class ConnectToMySQL {
	public static ArrayList<TransactionModel> DBData () throws ClassNotFoundException, SQLException {
		Connection conn = null;
		Statement stmt = null;
		ResultSet resultSet = null;
		ArrayList<TransactionModel> data = new ArrayList<>();
		try {
		Class.forName("org.postgresql.Driver");
		conn = DriverManager.getConnection("jdbc:postgresql://172.30.63.212:5432/accountdb", "postgres", "abc@1234");
		stmt = conn.createStatement();
		String Query = "SELECT count(1) OVER (PARTITION BY NULL) AS recordsTotal,*\r\n" + 
				"FROM (\r\n" + 
				"      select media_no,transaction_amt,user_account_balance,company_name,transaction_id from (\r\n" + 
				"      select tsp.transaction_id,\r\n" + 
				"      tsp.process_id,\r\n" + 
				"      tsp.transaction_date,\r\n" + 
				"      tsp.media_type,\r\n" + 
				"      tsp.media_no,\r\n" + 
				"      tsp.vehicle_no,\r\n" + 
				"      tsp.equipment_type,\r\n" + 
				"      tsp.equipment_id,\r\n" + 
				"      tsp.stop_id,\r\n" + 
				"      tsp.route_id,\r\n" + 
				"      tsp.operator_id,\r\n" + 
				"      tsp.transaction_amt,\r\n" + 
				"      tsp.disc_amt,\r\n" + 
				"      tsp.fare_amount,\r\n" + 
				"      tsp.transaction_unit,\r\n" + 
				"      tsp.process_status,\r\n" + 
				"      tsp.error_code,\r\n" + 
				"      tsp.process_date,\r\n" + 
				"      tsp.user_account_balance,\r\n" + 
				"      tp.applied_fare_product_id,\r\n" + 
				"      fp.fare_product_name,\r\n" + 
				"      rt.route_name ,\r\n" + 
				"      stp.stop_name,\r\n" + 
				"      tsp.transaction_type as transaction_type_code,\r\n" + 
				"      comp.company_id,\r\n" + 
				"      comp.company_name,\r\n" + 
				"      CASE\r\n" + 
				"      WHEN tsp.transaction_type = 'T0002'\r\n" + 
				"      THEN 'Entry'\r\n" + 
				"      WHEN tsp.transaction_type = 'T0003'\r\n" + 
				"      THEN 'Exit'\r\n" + 
				"      WHEN tsp.transaction_type\r\n" + 
				"      = 'T0007'\r\n" + 
				"      THEN 'Inspection'\r\n" + 
				"      WHEN tsp.transaction_type = 'T0006'\r\n" + 
				"      THEN\r\n" + 
				"      'Penalty'\r\n" + 
				"      WHEN tsp.transaction_type = 'T0004'\r\n" + 
				"      THEN 'Tran Normal Adjustment'\r\n" + 
				"      WHEN tsp.transaction_type = 'T0005'\r\n" + 
				"      THEN 'Tran Return Adjustment'\r\n" + 
				"      WHEN Transaction_type = 'T0009'\r\n" + 
				"      THEN 'Return Journey Refund'\r\n" + 
				"      ELSE ''\r\n" + 
				"      END AS transaction_type\r\n" + 
				"      from transaction_process tsp\r\n" + 
				"      LEFT JOIN comm_company comp ON tsp.company_id = comp.company_id\r\n" + 
				"      LEFT JOIN comm_route rt ON rt.route_id=tsp.route_id and rt.is_deleted='N'\r\n" + 
				"      and rt.company_id = comp.company_id\r\n" + 
				"      LEFT JOIN comm_stop stp ON stp.stop_id=tsp.stop_id and stp.is_deleted='N'\r\n" + 
				"      and stp.company_id = comp.company_id\r\n" + 
				"      LEFT JOIN transaction_product tp ON tsp.process_id = tp.process_id and tsp.transaction_id = tp.transaction_id\r\n" + 
				"      LEFT JOIN comm_fare_product fp ON fp.company_id = tsp.company_id\r\n" + 
				"      and fp.fare_product_id = tp.applied_fare_product_id\r\n" + 
				"      AND fp.is_deleted='N'\r\n" + 
				"      AND tsp.is_deleted = 'N'\r\n" + 
				"      AND comp.is_deleted = 'N'\r\n" + 
				"      AND coalesce(tp.is_deleted,null,'N',tp.is_deleted) = 'N'\r\n" + 
				"     )As quey )As comp where transaction_id = '19041000014108'";
		
		resultSet = stmt.executeQuery(Query);
		
		
		while (resultSet.next()) {
			TransactionModel trxObj = new TransactionModel();
			trxObj.setRecrodsttl(resultSet.getLong(1));
			trxObj.setMediano(resultSet.getBigDecimal(2));
			trxObj.setAccount_balance(resultSet.getBigDecimal(4));
			trxObj.setCompany_name(resultSet.getString(5));
			trxObj.setTransaction_amount(resultSet.getBigDecimal(3));
			trxObj.setTransactionid(resultSet.getBigDecimal(6));
			data.add(trxObj);		
        
		}
		}
		catch(Exception e) {
			
			System.out.println(e);
		}
conn.close();
return data;

	}

}