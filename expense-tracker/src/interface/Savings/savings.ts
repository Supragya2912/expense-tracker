export interface Saving {
  _id: string;
  userId: string;
  title: string;
  monthly: boolean;
  targetAmount: number;
  currentAmount: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ApiResponse {
  _id: string;
  userId: string;
  title: string;
  monthly: boolean;
  targetAmount: number;
  currentAmount: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  saving?: Saving[]; // Optional array of Saving objects
}

export interface filteredResponse {
  totalAmount: number;
  period: string;
}

export interface filteredAPIResponse {
  data: filteredResponse[];
}

export interface ErrorResponse {
  message: string;
}
