import { useEffect, useState } from "react";
import { getProfile } from "../../api/auth/api";
import { Profile } from "../../interface/auth/auth";

const useAuth = () => {

    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});

    useEffect(() => {
        const getInitialData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await getProfile(token);
                console.log("response", response);
                if ("data" in response) {
                    setProfile(response.data);
                } else {
                    setError(response.message);
                }
            } catch (err) {
                console.error("Failed to fetch profile:", err);
            } finally {
                setLoading(false);
            }
        };

        getInitialData();
    }, []);
    return { loading,  profile, error };
};

export default useAuth;
