import React from 'react';


const Favourites = () => {

    localStorage.setItem('Color', 'red');
    var detail = { artist: "Wire", track: "three girl rhumba", record: 'pink flag' }
    localStorage.setItem('Detail', JSON.stringify(detail));
    var storage = localStorage.getItem('Color');
    console.log(storage)
    var storage2 = JSON.parse(localStorage.getItem('Detail'));
    console.log(storage2)

    return (
        <div>
            
        </div>
    );
};

export default Favourites;