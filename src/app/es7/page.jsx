// "use client";

export default function Home() {
  const num = 2;

  return (
    <>
      {/* <User name="Munkjin" location="Officer" />
      <Double number={num} />
      <Drinks />
      <Car brand="Tesla" model="Model 3" year="2023" />
      <UpdateFruits /> */}
      <StockStatus stock={3} />
      <Greeting name="Baatarven" points={10} />
    </>
  );
}

// const User = ({ name, location }) => (
//   <div>
//     {name} lives in {location}
//   </div>
// );

// const Double = ({ number }) => {
//   return <span>{number * 2}</span>;
// };
// const Drinks = () => {
//   const drinks = ["Coffee", "Tea", "Water"];
//   return (
//     <ol>
//       {drinks.map((drink, index) => (
//         <li key={index}>{drink}</li>
//       ))}
//     </ol>
//   );
// };
// const Car = ({ brand, model, year }) => {
//   return (
//     <div>
//       This {brand} is {model} made in {year}{" "}
//     </div>
//   );
// };
// const fruit = [" apple ", " banana "];
// const UpdateFruits = () => {
//   const allFruits = [...fruit, "cherry"];
//   return allFruits;
// };

// // Create a component that receives a `stock` prop (a number). If `stock > 0`, display "In Stock" in green; otherwise, display "Out of Stock" in red using inline styles.
// import React from "react";

const StockStatus = ({ stock }) => {
  return (
    <div style={{ color: stock > 0 ? "green" : "red" }}>
      {stock > 0 ? "In stock" : "Out of stock"}
    </div>
  );
};
const Greeting = ({ name, points }) => {
  // Using template strings to create a dynamic message
  const statusMessage = `Hello, ${name}! You have ${points} points.`;
  return (
    <div className="profile">
      <h1>{statusMessage}</h1>
      <p>{`Next level: ${points + 10} points needed.`}</p>
    </div>
  );
};
// const Home = () => {
//   return <p>{API_URL}</p>;
// };
// export default Home;
