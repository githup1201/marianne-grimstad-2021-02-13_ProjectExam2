import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";

function Messages() {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);

    const url = BASE_URL + "contacts";

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
               
                if (json.error) {
                    setMessages([]);
                    setError(json.message);
                } else {
                    setMessages(json);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
           
            {error && <div className="error">{error}</div>}
            <ul>
                {messages.map((message) => {
                 
                        
                    return (
                        <>
                            <li key={message.id}>
                             <p>Name: {message.name}</p>
                             <p>Email: {message.email}</p>
                             <p>Message: {message.message}</p>
                        </li>
                       
                       </> 
                    );
                })}

            </ul>
        </>
    );
}

export default Messages;