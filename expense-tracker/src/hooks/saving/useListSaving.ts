import {useState, useCallback, useEffect} from "react";
import { getSavings } from "../../api/savings/api";
import { ApiResponse } from "../../interface/Savings/savings";


const useListSaving = () => {

    const [saving, setSaving] = useState<ApiResponse[]>([]);

    const fetchSaving = useCallback(async () => {
        try {
            const response = await getSavings();

            if ("message" in response) {
                return { message: response.message };
            }

            setSaving(response);

        } catch (err) {
            console.error(err);
            return { message: "Server error" };
        }
    },[]);

    useEffect(() => {
        fetchSaving();
    }, [fetchSaving]);

    return saving;

}

export default useListSaving;