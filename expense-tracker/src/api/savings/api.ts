import { SERVER_URL } from "../../constants";
import {GetSavingResponse, ErrorResponse} from "../../interface/Savings/savings"


export const getSavings = async (userId: string): Promise<GetSavingResponse[] | ErrorResponse> => {

    try {
        const response = await fetch(`${SERVER_URL}/api/savings/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
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