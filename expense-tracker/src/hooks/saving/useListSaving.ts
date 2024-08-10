import {useState, useCallback, useEffect} from "react";
import { getSavings,getSavingByFilter } from "../../api/savings/api";
import { ApiResponse } from "../../interface/Savings/savings";



const useListSaving = () => {

    const [saving, setSaving] = useState<ApiResponse[]>([]);
    const [ filteredResponse, setFilteredResponse ] = useState({});

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

    const getFilteredSaving = useCallback(async (filter: string) => {
        try {

            const response = await getSavingByFilter(filter);

            if ("message" in response) {
                return { message: response.message };
            }

            setFilteredResponse(response);

        } catch (err) {
            console.error(err);
            return { message: "Server error" };
        }
        },[]);

        useEffect(() => {
            
            const fetchInitialData = async () => {
                await fetchSaving();
            }
            fetchInitialData();

        }, [fetchSaving]);


    return { saving, getFilteredSaving, filteredResponse };
}

export default useListSaving;