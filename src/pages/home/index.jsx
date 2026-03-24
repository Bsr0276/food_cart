import { useSelector } from "react-redux";
import Loader from "../../conponents/loader";
import Card from "./card";

useSelector;
const Home = () => {
  const { isLoading, error, data } = useSelector(
    (store) => store.restaurantReducer,
  );
  return (
    <div className="container">
      <h1 className="font-semibold text-xl md:text-2xl">
        Yakınınızdaki Restoranlar
      </h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
