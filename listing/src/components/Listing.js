import React from 'react';
import './listing-style.css'
import axios from 'axios';


function Listing () {
    const [etsy, setEtsy] = React.useState([]);


    React.useEffect(() => {
        axios.get('http://localhost:3000/items.json').then(({ data }) => {
          setEtsy(data.etsy);
        });
      }, []);

        return (
        <div className="item-list">
        {etsy && etsy.map((obj) => (
                <div className="item" key={obj.listing_id}>
                    <div className="item-image">
                    <a href={obj.url}>
                            <img src={obj.MainImage.url_570xN}></img>
                    </a>
                    </div>
                    <div className="item-details">
                    <p className="item-title">{`${obj.title.length}` > 50 ? `${obj.title.substring(0, 50)}...` : obj.title}</p>
                    <p className="item-price">{obj.currency_code}{obj.price}</p>
                    <p className="item-quantity level-medium">{obj.quantity} left</p>
                    </div>
                </div>
        ))}
        </div>
        )
    
};

export default Listing;