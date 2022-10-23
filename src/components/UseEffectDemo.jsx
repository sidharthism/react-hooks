import { useState, useEffect } from "react";
import axios from "axios";
import { QUOTE_API_CONFIG } from "../constants";

async function getQuoteByCategory(category) {
    console.log(category);
    if (category && category !== "") {
        return new Promise((resolve, rej) => {
            axios.get(`https://quotes.rest/qod?category=${category}&language=en`)
                .then(res => {
                    const { quote, author } = res?.data?.contents?.quotes[0];
                    console.log(quote, author);
                    resolve({
                        quote,
                        author
                    })
                })
                .catch(err => {
                    console.log(err);
                    rej({
                        quote: "Errors can happen!",
                        author: ":)"
                    })
                })
        })
    }
    else return ({
        quote: "Please select a category!",
        author: ":)"
    })
}

export default function UseEffectDemo() {
    const [category, setCategory] = useState(QUOTE_API_CONFIG.getDefaultCategory());
    const [quote, setQuote] = useState({
        quote: "Quote loading...",
        author: ";)"
    });

    useEffect(() => {
        console.log("Print for every render!");
    });

    useEffect(() => {
        getQuoteByCategory(category).then(quote => setQuote(quote)).catch(q => setQuote(q));
        return () => console.log("Clean up done!") // Useful for event listener cleanups.
    }, [])

    useEffect(() => {
        getQuoteByCategory(category).then(quote => setQuote(quote)).catch(q => setQuote(q));
    }, [category])

    // onClick handlers
    const handleGetQuote = (e) => {
        e.preventDefault();
        getQuoteByCategory(category).then(quote => setQuote(quote)).catch(q => setQuote(q))
    }

    return (
        <>
            <h2>useEffect demo</h2>
            <br />
            <label htmlFor="category">Select category: </label>
            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                {QUOTE_API_CONFIG.getCategories().map((category, index) => <option key={index} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>)}
            </select>
            <br />
            <br />
            <h3>{quote?.quote}</h3>
            <br />
            <p>{quote?.author}</p>
            <br />
            <button onClick={handleGetQuote}>Get quote</button>
        </>
    )
}
