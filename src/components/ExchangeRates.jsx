import React from 'react';
import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES } from '../apollo';

const ExchangeRates = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if(loading) return <p>로딩중..</p>
    if(error) return <p>에러...</p>

    return data.rates.map(({currency, rate})=>(
        <div key={currency}>
            <p>
                {currency} : {rate}
            </p>
        </div>
    ));
}

export default ExchangeRates;