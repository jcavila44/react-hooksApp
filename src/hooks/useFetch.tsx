import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const useFetch = (url: string = '') => {

    const [useFetchState, setUseFetchState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setUseFetchState({
            ...useFetchState,
            isLoading: true
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setUseFetchState({
            data,
            isLoading: false,
            hasError: null
        });

    }

    useEffect(() => {
        getFetch();
    }, [url])




    return {
        data: useFetchState.data,
        isLoading: useFetchState.isLoading,
        hasError: useFetchState.hasError,
    };
}



useFetch.propTypes = {
    url: PropTypes.string.isRequired,
};

useFetch.defaultProps = {
    url: 'Fata la propiedad url',
};