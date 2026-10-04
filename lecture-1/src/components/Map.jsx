
import React from 'react';

const Map = () => {

  const phone = [
    {
      id: 1,
      name: "iPhone 13 Pro Max",
      img: "https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_UY218_.jpg",
    },
    {
      id: 2,
      name: "iPhone 14 Pro Max",
      img: "https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_UY218_.jpg",
    },
    {
      id: 3,
      name: "iPhone 15 Pro Max",
      img: "https://m.media-amazon.com/images/I/51UuPZLMaCL._AC_UY218_.jpg",
    }
  ];

  return (
    <>
      <div>
        {phone.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <h3>{item.name}</h3>
            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Map;

