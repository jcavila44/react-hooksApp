import { LoadingQuote, Quote } from "../03-examples";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0] || { author: '', quote: '' };

    return (
        <>
            <h1>Layout</h1>
            <hr />

            {
                (isLoading === true)
                    ? <LoadingQuote />
                    : <Quote author={author} quote={quote} />
            }

            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment(1)}>Next quote</button>


        </>
    )
}
