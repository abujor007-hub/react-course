import React from "react";

const Filter = () => {
  const person = [
    { id: 1, name: "abujor", active: true },
    { id: 2, name: "ariyan", active: false },
    { id: 3, name: "rouha", active: true },
    { id: 4, name: "nabil", active: true },
  ];

  return (
    <>
      <div>
        {person
          .filter((data) => data.active)
          .map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Filter;
