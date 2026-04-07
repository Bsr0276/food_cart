import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromBasket, updateAmount } from "../../redux/actions/basketActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateAmount({ ...item, amount: item.amount + 1 }));
  };

  const handleDecrease = () => {
    if (item.amount > 1) {
      dispatch(updateAmount({ ...item, amount: item.amount - 1 }));
    } else {
      dispatch(removeFromBasket(item.id));
    }
  };

  return (
    <div className="flex gap-4 bg-white p-4 rounded-lg shadow items-center">
      <img src={item.photo} alt={item.title} className="size-20 rounded-md object-cover" />

      <div className="flex-1">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <p className="text-gray-500">{item.restaurantId} No'lu Restoran</p>
      </div>

      <div className="flex flex-col items-end gap-3">
        <p className="font-bold text-lg text-red-500">{(item.price * item.amount).toFixed(2)} ₺</p>
        
        <div className="flex items-center gap-3 border rounded-md p-1">
          <button
            onClick={handleDecrease}
            className="p-2 text-red-500 hover:bg-red-50 transition rounded-md"
          >
            {item.amount > 1 ? <FaMinus size={12} /> : <FaTrash size={12} />}
          </button>
          
          <span className="font-bold min-w-[20px] text-center">{item.amount}</span>
          
          <button
            onClick={handleIncrease}
            className="p-2 text-red-500 hover:bg-red-50 transition rounded-md"
          >
            <FaPlus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
