import React from 'react';
import {useQuery} from "@tanstack/react-query";
import fetchWeather from "../../api/fetchWeather";

const CurrentWeather = () => {

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['weather'],
        queryFn: fetchWeather,
    })

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    console.log(data)

    return (
        <ul>
            PORCA MISERIA
        </ul>
    )
};

export default CurrentWeather;