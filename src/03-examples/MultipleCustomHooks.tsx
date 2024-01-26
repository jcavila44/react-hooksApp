import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

    const { data, isLoading } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const { author, quote } = !!data && data[0] || { author: '', quote: '' };

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr />

            {
                (isLoading === true) ? (
                    <div className="alert alert-info text-center"> Cargando... </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{quote}</p>
                        <footer className="blockquote-footer mt-1">{author}</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary">
                Next quote
            </button>

        </>
    )
}
