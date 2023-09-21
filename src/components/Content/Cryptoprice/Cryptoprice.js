import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cryptoprice.css';

export default function Cryptoprice() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cusd%2Cripple%2Ctron&vs_currencies=usd&include_24hr_change=true&precision=2'
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const Array = [
    {
      name: 'Bitcoin',
      price: data.bitcoin?.usd || '$0.00',
      change: `${data.bitcoin?.usd_24h_change.toFixed(2) || '0.00'}%`,
    },
    {
      name: 'Doge coin',
      price: data.dogecoin?.usd || '$0.00',
      change: `${data.dogecoin?.usd_24h_change.toFixed(2) || '0.00'}%`,
    },
    {
      name: 'Ripple',
      price: data.ripple?.usd || '$0.00',
      change: `${data.ripple?.usd_24h_change.toFixed(2) || '0.00'}%`,
    },
    {
      name: 'Tron',
      price: data.tron?.usd || '$0.00',
      change: `${data.tron?.usd_24h_change.toFixed(2) || '0.00'}%`,
    },
    {
      name: 'USD',
      price: data.usd?.usd || '$0.00',
      change: `${data.usd?.usd_24h_change.toFixed(2) || '0.00'}%`,
    },
  ];

  return (
    <div className="crptopricediv">
      <div className="cryptoprice">
        {loading ? (
          <p>Loading...</p>
        ) : (
          Array.map((newarray, index) => (
            <div className="cryptoprice-box" key={index}>
              <div className="box">
                <h3>{newarray.name}</h3>
                <h3>{newarray.price}$</h3>
                <p className={newarray.change<=0 ?'red':'green'}>{newarray.change <= 0 ? `⌄${newarray.change}` : `^${newarray.change}`}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
