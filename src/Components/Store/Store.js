import React, { useState } from 'react';

const Store = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {showData(data)});

    function showData(data){
        console.log(data);
        let userHTML = ' ';

        data.forEach(user => {
            userHTML = userHTML + `<div>${user.name} </div>`

        });
        
    }
    return (
        <div>
            
        </div>
    );
};

export default Store;