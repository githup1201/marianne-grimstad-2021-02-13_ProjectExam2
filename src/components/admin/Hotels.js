import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";

function Hotels() {
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);

    const url = BASE_URL + "establishments";

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
               
                if (json.error) {
                    setHotels([]);
                    setError(json.message);
                } else {
                    setHotels(json);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Container className="Hotels">
            <h4 className="Hotels__header">Hotels</h4>
            {error && <div className="error">{error}</div>}
            <ul className="Hotels__item">
                {hotels.map((hotel) => {
        
                    return (
                        <li key={hotel.id} >
                            <NavLink to={`/admin/hotels/edit/${hotel.id}`} className="Hotels__link">{hotel.name}</NavLink>
                        </li>
                    );
                })}

            </ul>
          </Container>
        </>
    );
}

export default Hotels;