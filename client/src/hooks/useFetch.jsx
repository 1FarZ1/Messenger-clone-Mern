const useEffect = import("react").useEffect;
const useState = import("react").useState;


const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError(error);
            }
        };
         fetchData();
    }, []);
    return { response, error };
};

export default useFetch;