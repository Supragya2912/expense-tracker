export interface Savings {
    userId: string;
    title: string;
    amount: number;
    date: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface SavingsTableProps {
    savings: Savings[];
}

export interface GetSavingResponse {
    message: string;
    data: {
        savings: Savings[];
    };
}

export interface ErrorResponse {
    message: string;
}