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

export interface Profile {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

// Interface for the entire API response
export interface ProfileResponse {
    success: boolean;
    data: Profile;
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

export interface LoginSuccessResponse {
    message: string;
    data: {
        accessToken: string;
    };
}