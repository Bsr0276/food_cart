import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Loader from "../../components/loader";
import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then((res) => setRestaurant(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loader designs="my-[65px]" />;

  if (!restaurant) return <div className="h-[150px]" />;

  return (
    <div className="flex gap-5">
      <img src={restaurant.photo} className="size-[150px] rounded-md" />

      <div className="flex flex-col justify-between">
        <div className="flex gap-4">
          <p className="flex items-center gap-2">
            <FaArrowDown className="text-red-500" />
            <span className="text-gray-600">min {restaurant.minPrice} TL</span>
          </p>
          <p className="flex items-center gap-2">
            <FaClock className="text-red-500" />
            <span className="text-gray-600">≈ {restaurant.estimatedDelivery} dk</span>
          </p>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold">{restaurant.name}</h1>

        <p className="flex items-center gap-2">
          <FaStar className="text-red-500" />
          <span className="text-gray-600">{restaurant.rating}</span>

          <button className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition">Yorumları Gör</button>
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;