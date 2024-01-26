
import PropTypes from 'prop-types';

interface IQuote {
    quote: string,
    author: string
}

export const Quote = ({ quote, author }: IQuote) => {
    return (
        <blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer mt-1">{author}</footer>
        </blockquote>
    )
}



Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

Quote.defaultProps = {
    quote: 'Fata la propiedad quote',
    author: 'Fata la propiedad author',
};