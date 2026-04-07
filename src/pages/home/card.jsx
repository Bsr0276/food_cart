import { FaClock, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/restaurant/${item.id}`} className="relative shadow rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition duration-300">
      <span className="bg-red-500 py-1 px-3 text-sm absolute end-1 top-2 text-white rounded-md">
        {item.distance} Km Uzakta{" "}
      </span>

      <img
        src={item.photo}
        alt={item.name}
        className="w-full object-cover h-[250px] lg:h-[200px]"
      />
      <div className="p-3">
        {/* Başlık  */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-xl font-semibold">{item.name}</h3>
          <p className="flex items-center gap-2 text-red-500">
            <FaStar />
            {item.rating}
          </p>
        </div>
        {/* Fiyat  */}
        <p className="text-sm my-3 text-gray-500">
          {item.minPrice}₺'den başlar...
        </p>
        {/* Teslimat Süresi  */}
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2 font-semibold">
            <FaClock className="text-red-500" />
            <span className="text-gray-500">{item.estimatedDelivery} dk</span>
          </p>
          {item.isDeliveryFree && (
            <p className="flex items-center gap-2 font-semibold">
              <MdDeliveryDining className="text-red-500 text-xl" />
              <span className="text-red-500">Ücretsiz Teslimat</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
