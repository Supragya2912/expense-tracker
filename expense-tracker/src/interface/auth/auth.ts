export interface RegisterUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
}

export interface SuccessResponse {
    message: string;
    data: {
        user: User;
    };
}

export interface ErrorResponse {
    message: string;
}



