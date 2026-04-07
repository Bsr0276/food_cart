import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/index";
import Error from "../../components/error/index";
import api from "../../api/index";
import { FaFire } from "react-icons/fa";
import Card from "./card";

const RestaurantProducts = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    api.get(`products?restaurantId=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <Loader />;

  if (error) return <Error info={error} />;

  return (
    <div>
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FaFire className="text-red-500 font-serif font-[900]" />
        Popüler
      </h2>

      <p className="text-gray-600">Restoranın en çok tercih edilen ürünleri</p>

      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantProducts;