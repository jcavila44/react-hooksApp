import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0] || { author: '', quote: '' };

    return (
        <>
            <h1>Breaking bad quotes</h1>
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
