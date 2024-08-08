import { SERVER_URL } from '../../constants/index';
import { RegisterUser, SuccessResponse, ErrorResponse, LoginSuccessResponse } from '../../interface/auth/auth';


export const registerUser = async (data: RegisterUser): Promise<SuccessResponse | ErrorResponse> => {
    try {
        const response = await fetch(`${SERVER_URL}/api/create-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            return { message: result.message }; 
        }

        return result;
    } catch (err) {
        console.error(err);
        return { message: "Server error" };
    }
};

export const loginUser = async (data: { email: string; password: string }): Promise<LoginSuccessResponse | ErrorResponse> => {
    try {
        const response = await fetch(`${SERVER_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            return { message: result.message };
        }

        return result;
    } catch (err) {
        console.error(err);
        return { message: "Server error" };
    }
}

export const getProfile = async (token: string): Promise<SuccessResponse | ErrorResponse> => {
    try {
        const response = await fetch(`${SERVER_URL}/api/get-profile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        const result = await response.json();
        console.log(result);

        if (!response.ok) {
            return { message: result.message };
        }

        return result;
    } catch (err) {
        console.error(err);
        return { message: "Server error" };
    }
}