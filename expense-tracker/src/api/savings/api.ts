import { SERVER_URL } from "../../constants";
import {ApiResponse, ErrorResponse, filteredAPIResponse} from "../../interface/Savings/savings"


export const getSavings = async (): Promise<ApiResponse[] | ErrorResponse> => {

    try {
        const response = await fetch(`${SERVER_URL}/api/get-saving`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
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

export const getSavingByFilter = async (filter: string): Promise<filteredAPIResponse | ErrorResponse> => {

    try {
        const response = await fetch(`${SERVER_URL}/api/get-total-saving`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ filter }),
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