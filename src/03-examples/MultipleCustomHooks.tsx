import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

    const { data, hasError, isLoading } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');

    console.log({ data, hasError, isLoading });

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr />
        </>
    )
}
