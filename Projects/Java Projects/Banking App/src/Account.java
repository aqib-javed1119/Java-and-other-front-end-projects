  
import java.util.Scanner;

public class Account {
	//Class Variables
	int balance;
	int pastTransaction;
	String Name_of_Customer;
	String ID_of_Customer;
	
	//Class constructor
	Account(String CustomerName, String CustomerID) {
		Name_of_Customer = CustomerName;
		ID_of_Customer = CustomerID;
	}
	
	//Function for Depositing money
	void deposit(int value) {
		if (value != 0) {
			balance = balance + value;
			pastTransaction = value;
		}
	}
	
	//Function for Withdrawing money
	void withdraw(int value) {
		if (value != 0) {
			balance = balance - value;
			pastTransaction = -value;
		}
	}
	
	//Function showing the previous transaction
	void getpastTransaction() {
		if (pastTransaction > 0) {
			System.out.println("Amount Deposited :  " + pastTransaction);
		} else if (pastTransaction < 0) {
			System.out.println("Amount Withdrawn : " + Math.abs(pastTransaction));
		} else {
			System.out.println(" A transaction has not occured");
		}
	}
	
	//Function calculating interest of current funds after a number of years
	void calculateInterest(int annums) {
		double Rate_of_interest = .0185;
		double newValue = (balance * Rate_of_interest * annums) + balance;
		System.out.println("The current interest rate is " + (100 * Rate_of_interest) + "%");
		System.out.println("After " + annums + " years , your balance will be: " + newValue);
	}
	
	//Function showing the main menu
	void showMenu() {
		char option = '\0';
		Scanner scanner = new Scanner(System.in);
		System.out.println("Welcome, " + Name_of_Customer + "!");
		System.out.println("Your ID is: " + ID_of_Customer);
		System.out.println();
		System.out.println("What would you like to do?");
		System.out.println();
		System.out.println("A. Check your balance");
		System.out.println("B. Make a deposit");
		System.out.println("C. Make a withdrawal");
		System.out.println("D. View previous transaction");
		System.out.println("E. Calculate interest");
		System.out.println("F. Exit");
		
		do {
			System.out.println();
			System.out.println("Enter an option: ");
			char option1 = scanner.next().charAt(0);
			option = Character.toUpperCase(option1);
			System.out.println();
			
			switch(option) {
			//Case 'A' allows the user to check their account balance
			case 'A':
				System.out.println("====================================");
				System.out.println("Balance = $" + balance);
				System.out.println("====================================");
				System.out.println();
				break;
			//Case 'B' allows the user to deposit money into their account using the 'deposit' function
			case 'B':
				System.out.println("Enter an amount to deposit: ");
				int amount = scanner.nextInt();
				deposit(amount);
				System.out.println();
				break;
			//Case 'C' allows the user to withdraw money from their account using the 'withdraw' function
			case 'C':
				System.out.println("Enter an amount to withdraw: ");
				int amount2 = scanner.nextInt();
				withdraw(amount2);
				System.out.println();
				break;
			//Case 'D' allows the user to view their most recent transaction using the 'getPreviousTransaction' function
			case 'D':
				System.out.println("====================================");
				getpastTransaction();
				System.out.println("====================================");
				System.out.println();
				break;
			//Case 'E' calculates the accrued interest on the account after a number of years specified by the user
			case 'E':
				System.out.println("Enter how many years of accrued interest: ");
				int years = scanner.nextInt();
				calculateInterest(years);
				break;
			//Case 'F' exits the user from their account
			case 'F':
				System.out.println("====================================");
				break;
			//The default case let's the user know that they entered an invalid character and how to enter a valid one
			default:
				System.out.println("Error: invalid option. Please enter A, B, C, D, or E or access services.");
				break;
			}
		} while(option != 'F');
		System.out.println("Thank you for banking with us!");
	}
	
}