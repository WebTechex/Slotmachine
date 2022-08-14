import React, { useEffect, useState } from 'react';
import './css/style.css';

const Main = () => {
    const [search, Show] = useState('London');
    const [city, Setcity] = useState(null);

    useEffect(() => {
        const Api = async() => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=74947abd36e4f829308cf784921015db`)
            const data = await res.json();
            console.log(data.main);
            Setcity(data.main);
        }
        Api();
    }, [search])

    return (
        <>
            <div className='main'>
                <div className='card'>
                <input type='search' onChange={(e) => { Show(e.target.value) }} value={search} />
                {!city ? ( <p style={{marginTop:'30px', color:'green'}}>Data not found</p> ): 
                (
                <div>
                    <div className='info'>
                        <h1><i className="fa fa-street-view"></i>{search}</h1>
                        <br />
                        <h2>{city.temp}°Cel</h2>
                        <p>Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</p>
                    </div>
                    <div className='wave one'></div>
                    <div className='wave two'></div>
                    <div className='wave three'></div>
                </div>
                )
                }
            </div></div>
        </>
    )
}
export default Main;