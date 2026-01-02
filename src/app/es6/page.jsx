"use client";

export default function Home() {
  const num = 2;

  return (
    <>
      <User name="Munkjin" location="Officer" />
      <Double number={num} />
      <Drinks />
      <Car brand="Tesla" model="Model 3" year="2023" />
      <UpdateFruits />
    </>
  );
}

const User = ({ name, location }) => (
  <div>
    {name} lives in {location}
  </div>
);

const Double = ({ number }) => {
  return <span>{number * 2}</span>;
};
const Drinks = () => {
  const drinks = ["Coffee", "Tea", "Water"];
  return (
    <ol>
      {drinks.map((drink, index) => (
        <li key={index}>{drink}</li>
      ))}
    </ol>
  );
};
const Car = ({ brand, model, year }) => {
  return (
    <div>
      This {brand} is {model} made in {year}{" "}
    </div>
  );
};
const fruit = [" apple ", " banana "];
const UpdateFruits = () => {
  const allFruits = [...fruit, "cherry"];
  return allFruits;
};
