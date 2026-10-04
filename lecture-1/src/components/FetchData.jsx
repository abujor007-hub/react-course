import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [api_data, setApi_data] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");

      const data = await api.json();

      setApi_data(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {api_data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.completed ? "Completed" : "Pending"}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
