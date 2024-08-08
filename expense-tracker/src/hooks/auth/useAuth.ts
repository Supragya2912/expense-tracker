import { useEffect, useState } from "react";
import { getProfile } from "../../api/auth/api";

const useAuth = () => {

    const [token, setToken] = useState("");
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});

    useEffect(() => {
        const getInitialData = async () => {
            const token = localStorage.getItem("token");
            console.log("token",token);

            if (!token) {
                localStorage.removeItem("token");
                setLoading(false);
                return;
            }

            try {
                const response = await getProfile(token);
                if ("data" in response) {
                    setToken(token);
                    setProfile(response.data);
                } else {
                    setError(response.message);
                    localStorage.removeItem("token");
                }
            } catch (err) {
                console.error("Failed to fetch profile:", err);
                localStorage.removeItem("accessToken");
            } finally {
                setLoading(false);
            }
        };

        getInitialData();
    }, []);

    return { token, profile, loading, error };
};

export default useAuth;