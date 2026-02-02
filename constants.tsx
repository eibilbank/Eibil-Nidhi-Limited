
import { ProductInfo } from './types';

export const PRODUCTS: ProductInfo[] = [
  {
    id: 'gold-loan',
    name: 'Gold Loan',
    overview: 'Unlock the value of your gold ornaments instantly with our flexible Gold Loan schemes. We provide maximum value for your gold with the lowest interest rates in the industry.',
    features: ['Instant Sanction & Disbursal', 'Minimal Documentation', 'Safety & Security of Ornaments', 'No Processing Fees', 'Part-release Facility'],
    eligibility: ['Age: 18 to 70 years', 'Indian Citizenship', 'Ownership of Gold Ornaments (18-24 Karat)'],
    documents: ['Aadhar Card', 'PAN Card', 'Passport size photographs', 'Address Proof'],
    interestRate: 'Starts from 9.9% p.a.',
    category: 'loan'
  },
  {
    id: 'online-gold-loan',
    name: 'Online Gold Loan',
    overview: 'Experience the convenience of managing your gold loan from the comfort of your home. Apply, pay interest, and track your loan through our secure online portal.',
    features: ['24/7 Access to Loan Account', 'Digital Interest Payments', 'Real-time Loan Tracking', 'Renew Loans Online', 'Secure Digital Vaulting'],
    eligibility: ['Existing EIBIL Members', 'Valid KYC Documents', 'Active Internet Banking'],
    documents: ['Membership ID', 'KYC Documents', 'Bank Account Details'],
    interestRate: 'Competitive rates starting from 10.5% p.a.',
    category: 'loan'
  },
  {
    id: 'doorstep-gold-loan',
    name: 'Door Step Gold Loan',
    overview: 'Our executives will visit your home for gold valuation and loan processing. Get the loan amount credited to your account without even visiting a branch.',
    features: ['Service at your Convenience', 'Instant Valuation at Home', 'Safe & Transparent Process', 'Immediate Fund Transfer', 'Privacy Guaranteed'],
    eligibility: ['Residence within 15km of Branch', 'Minimum Loan Amount: ₹50,000', 'Valid ID Proof'],
    documents: ['Current Address Proof', 'Aadhar Card', 'PAN Card', 'Photograph'],
    interestRate: 'Starts from 11% p.a.',
    category: 'loan'
  },
  {
    id: 'property-loan',
    name: 'Loan Against Property',
    overview: 'Leverage your residential or commercial property to meet your business or personal financial requirements with high loan amounts and long tenures.',
    features: ['High Loan Value (LTV)', 'Flexible Repayment Options', 'Tenure up to 15 years', 'Balance Transfer Available', 'Quick Processing'],
    eligibility: ['Salaried or Self-Employed individuals', 'Property with clear Title Deeds', 'Minimum Monthly Income: ₹25,000'],
    documents: ['Property Sale Deed', 'Latest Property Tax Receipt', 'Approved Building Plan', 'Last 6 months Bank Statement', 'Income Proof'],
    interestRate: 'Starts from 11.5% p.a.',
    category: 'loan'
  },
  {
    id: 'instant-property-loan',
    name: 'Instant Property Loan',
    overview: 'A specialized fast-track loan scheme for urgent financial needs, backed by your property. Get approvals within 48 hours.',
    features: ['Express Processing', 'Minimum Documentation', 'Competitive Interest Rates', 'No Pre-payment Charges', 'Transparent Fee Structure'],
    eligibility: ['Valid Property Title', 'Existing Income Stream', 'Clear Credit History'],
    documents: ['Property Documents', 'KYC', 'Last 3 years ITR', 'Business Registration (if applicable)'],
    interestRate: 'Starts from 12% p.a.',
    category: 'loan'
  },
  {
    id: 'term-deposit',
    name: 'Term Deposit (FD)',
    overview: 'Invest your surplus funds in our Term Deposit schemes and earn significantly higher interest than traditional bank fixed deposits.',
    features: ['High Returns', 'Flexible Tenure (6 months to 5 years)', 'Monthly/Quarterly Interest Payouts', 'Premature Withdrawal Facility', 'Nomination Facility'],
    eligibility: ['EIBIL Members Only', 'Minor accounts with Guardians', 'Trusts & Societies'],
    documents: ['Membership Form', 'KYC Documents', 'Initial Deposit Amount', 'Photograph'],
    interestRate: 'Up to 12.5% p.a.',
    category: 'deposit'
  },
  {
    id: 'recurring-deposit',
    name: 'Recurring Deposit',
    overview: 'Build your savings systematically with our Recurring Deposit scheme. Save a fixed amount every month and watch your wealth grow with high interest.',
    features: ['Compounded Interest', 'Small Monthly Contributions', 'Automated Transfers', 'Loan against RD facility', 'Flexible tenure up to 10 years'],
    eligibility: ['Indian Resident Members', 'Minimum Monthly Deposit: ₹500', 'Individual or Joint Accounts'],
    documents: ['Identity Proof', 'Address Proof', 'Bank Mandate Form'],
    interestRate: 'Starts from 8% to 11% p.a.',
    category: 'deposit'
  },
  {
    id: 'savings-deposit',
    name: 'Savings Deposit',
    overview: 'The ideal savings account for daily financial needs, offering liquidity and attractive interest on your daily balances.',
    features: ['Daily Interest Calculation', 'Mobile Banking Access', 'Rupay Debit Card', 'No Minimum Balance Penalties', 'Free SMS Alerts'],
    eligibility: ['All Members of EIBIL Nidhi', 'Resident Indians'],
    documents: ['Aadhar Card', 'PAN Card', 'Member Introduction'],
    interestRate: '6.5% p.a. (Calculated daily)',
    category: 'deposit'
  },
  {
    id: 'loan-against-deposit',
    name: 'Loan Against Deposit',
    overview: 'Meet your urgent liquidity needs without breaking your FD or RD. Borrow against your deposits at very low interest rates while your investment continues to grow.',
    features: ['Loan up to 90% of Deposit Value', 'Interest rate just 2% above Deposit Rate', 'Instant Approval', 'No Credit Score Check', 'No Income Proof Required'],
    eligibility: ['Active FD or RD account with EIBIL', 'Lien on Deposit Receipt'],
    documents: ['Original Deposit Receipt', 'Loan Application Form', 'Signed Lien Letter'],
    interestRate: 'Deposit Rate + 2%',
    category: 'loan'
  }
];

export const INVESTOR_CATEGORIES = [
  'Notice to Shareholders',
  'Financial Results',
  'Board Governance',
  'Fair Practice Code',
  'Policies',
  'Annual Returns',
  'CSR'
];

export const BRANCHES = [
  { id: 1, name: 'Mumbai Head Office', address: 'Bandra Kurla Complex, Mumbai', phone: '+91 22 1234 5678' },
  { id: 2, name: 'Bangalore Branch', address: 'Indiranagar, Bangalore', phone: '+91 80 8765 4321' },
  { id: 3, name: 'Chennai Branch', address: 'Anna Salai, Chennai', phone: '+91 44 1122 3344' }
];
