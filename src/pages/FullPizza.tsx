import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://68e7a39510e3f82fbf400c6d.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert(
          "Такая пицца отсутствует в ассортименте\nПри клике на ОК, вы вернетесь на главную страницу"
        );
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container fullPizza_container">
      <h1>Информация о пицце {pizza.title}</h1>
      <img width={300} height={300} src={pizza.imageUrl} alt="" />
      <p>Стоимость: {pizza.price} рублей</p>
    </div>
  );
};

export default FullPizza;
