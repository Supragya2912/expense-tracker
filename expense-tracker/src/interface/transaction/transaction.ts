export interface Transaction {
    userId: string;
    type: 'income' | 'expense';
    title: string;
    amount: number;
    date: Date;
    merchant?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export interface TransactionsTableProps {
    transactions: Transaction[];
  }