import { useState, useCallback } from "react";

export const useHttp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    
    const request = useCallback(async (url) => {
        setLoading(true)
        setLoading(null)


        try {
            let response = await fetch(url);
            let data = await response.json();

            setLoading(false)

            return data;
        } catch(e) {
            setLoading(false)
            setError(e.message);
            throw e;
        }
    })

    const clearError = () => setError(null);

    return [error, request, loading, clearError]
}