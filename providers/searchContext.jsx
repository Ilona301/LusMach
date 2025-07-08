import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [corsets, setCorsets] = useState([]);
    const [dresses, setDresses] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch both lists
    useEffect(() => {
        setLoading(true);
        Promise.all([
            axios.get("http://localhost:4000/corsets"),
            axios.get("http://localhost:4000/dresses")
        ])
            .then(([corsRes, dressRes]) => {
                const corsetData = corsRes.data;
                const dressData = dressRes.data;
                setCorsets(corsetData);
                setDresses(dressData);
                setResults([...corsetData, ...dressData]);
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    // Filter logic with debounce
    useEffect(() => {
        const timeout = setTimeout(() => {
            const term = search.trim().toLowerCase();

            if (term === "") {
                setResults([...corsets, ...dresses]);
                return;
            }


            const filterFn = (item) =>
                ["name", "type"].some(key =>
                    item[key]?.toLowerCase().includes(term)
                );

            const filtered = [
                ...corsets.filter(filterFn),
                ...dresses.filter(filterFn)
            ];

            setResults(filtered);

            console.log("Filtered:", filtered); // 🔍 For debugging
        }, 300);

        return () => clearTimeout(timeout);
    }, [search, corsets, dresses]);

    return (
        <SearchContext.Provider value={{ search, setSearch, results, loading }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);
