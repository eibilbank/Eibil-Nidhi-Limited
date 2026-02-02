
export enum LoanType {
  GOLD = 'Gold Loan',
  ONLINE_GOLD = 'Online Gold Loan',
  DOORSTEP_GOLD = 'Doorstep Gold Loan',
  PROPERTY = 'Loan Against Property',
  INSTANT_PROPERTY = 'Instant Property Loan',
  DEPOSIT = 'Loan Against Deposit'
}

export enum DepositType {
  TERM = 'Term Deposit',
  RECURRING = 'Recurring Deposit',
  SAVINGS = 'Savings Deposit'
}

export interface InvestorDocument {
  id: string;
  title: string;
  category: string;
  year: string;
  url: string;
  date: string;
}

export interface LoanApplication {
  id: string;
  fullName: string;
  mobile: string;
  email: string;
  type: string;
  amount: number;
  city: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  timestamp: string;
}

export interface ProductInfo {
  id: string;
  name: string;
  overview: string;
  features: string[];
  eligibility: string[];
  documents: string[];
  interestRate: string;
  category: 'loan' | 'deposit';
}
