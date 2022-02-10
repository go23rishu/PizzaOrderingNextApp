import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro
        blanditiis, error deserunt ducimus harum soluta at rem quo, doloremque,
        quas placeat sit accusamus hic vitae nesciunt a dolore sequi? Recusandae
        sapiente atque optio sunt, quasi commodi odit debitis distinctio ipsum
        reiciendis amet ut soluta porro laborum. Perferendis, sequi vel.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
