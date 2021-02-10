import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";


function Enquiries() {
    const [enquiries, setEnquiries] = useState([]);
    const [error, setError] = useState(null);

    const url = BASE_URL + "enquiries";

    const options = { headers };
  

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
               
                if (json.error) {
                    setEnquiries([]);
                    setError(json.message);
                } else {
                    setEnquiries(json);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
        
            
            {error && <div className="error">{error}</div>}
            <ul>
                {enquiries.map((enquiry) => {
                 
                 
                    return (
                        <>
                        <li key={enquiry.id}>
                           <p>Name: {enquiry.name}</p>
                           <p>Email: {enquiry.email}</p>
                           <p>Establishment:{enquiry.establishmentId}</p>
                           <p>Checkin: {enquiry.checkIn}</p>
                           <p>Checkout: {enquiry.checkOut}</p>
                        </li>  
                     </>
                    );
                })}

            </ul>

          
        </>
    );
}

                     
export default Enquiries;