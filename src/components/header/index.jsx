import { IoRestaurant } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GiFoodTruck } from "react-icons/gi";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const { data } = useSelector((store) => store.restaurantReducer);
  const { data: basket } = useSelector((store) => store.basketReducer);

  const totalCount = basket.reduce((total, item) => total + item.amount, 0);

  return (
    <header className=" shadow bg-neutral-300">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-red-500 font-[900] text-2xl md:text-3xl font-mono"
        >
          <span className="text-3xl font-serif font-[900]">Food_Cart</span>
          <GiFoodTruck className="text-[1.2em]" />
        </Link>

        <div className="flex gap-5">
          <Link
            to="/"
            className=" px-1 py-1 font-serif font-[900] flex items-center gap-1 bg-re  hover:bg-red-400 rounded-full"
          >
            Yakınınızda {data?.length} <IoRestaurant className="text-red-500" />
            <span className="max-md:hidden">Restoran var</span>
          </Link>
          <Link
            to="/cart"
            className="px-3 py-1 hover:bg-red-400 transition  flex items-center rounded-full gap-2"
          >
            <BsBasket />
            <span className="font-serif font-[900]">{totalCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
