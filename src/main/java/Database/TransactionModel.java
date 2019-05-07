package Database;

public class TransactionModel {
  
	private java.math.BigDecimal Mediano;
	private java.math.BigDecimal transaction_amount;
	private java.math.BigDecimal account_balance;
	private String company_name;
	private java.math.BigDecimal transactionid;
	private long recrodsttl;

	
	public java.math.BigDecimal getMediano() {
		return Mediano;
	}
	public void setMediano(java.math.BigDecimal mediano) {
		Mediano = mediano;
	}
	public java.math.BigDecimal getTransaction_amount() {
		return transaction_amount;
	}
	public void setTransaction_amount(java.math.BigDecimal transaction_amount) {
		this.transaction_amount = transaction_amount;
	}
	public java.math.BigDecimal getAccount_balance() {
		return account_balance;
	}
	public void setAccount_balance(java.math.BigDecimal account_balance) {
		this.account_balance = account_balance;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String  company_name) {
		this.company_name = company_name;
	}
	public 	java.math.BigDecimal getTransactionid() {
		return transactionid;
	}
	public void setTransactionid(java.math.BigDecimal transactionid) {
		this.transactionid = transactionid;
	}
	public long getRecrodsttl() {
		return recrodsttl;
	}
	public void setRecrodsttl(long recrodsttl) {
		this.recrodsttl = recrodsttl;
	}
	
	


	
}
