import { SERVER_URL } from '../../constants/index';
import { RegisterUser, SuccessResponse, ErrorResponse } from '../../interface/auth/auth';


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

