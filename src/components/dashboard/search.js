import React, { useState } from 'react'
import axios from 'axios';
import Loader from '../../assets/loaders/loader.svg';

const Search = () => {

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);

        const apikey = "acc338977c6a27651fc85a8974fdca14";
        const searchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=metr`;

        try{

            const api_call = await axios.get(searchUrl);
            setResult(api_call.data);
            //console.log(api_call.data);
          
        }catch(err){
            setError(err.message);
        }

        setQuery('');
        setLoading(false);
    };

    return (
        <div>
                <div className="search">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="search"
                            name="search"
                            value={query}
                            onChange={handleChange}
                            placeholder='Enter city name' />
                        {loading ? (
                            <img className="search-loader" src={Loader} alt="" />
                        ) : null}
                    </form>
                </div>
                <div>
                    {error ? <p>{error}</p> : null}
                    <p>{result.name}</p>
                </div>
        </div>
    )
}

export default Search;
