import { FaMinus, FaPlus } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, updateAmount } from "../../redux/actions/basketActions";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.basketReducer);

  // Ürün sepette var mı kontrol et
  const found = data.find((i) => String(i.productId) === String(product.id));

  const handleAdd = () => {
    if (found) {
      // Varsa miktarını artır
      dispatch(updateAmount({ ...found, amount: found.amount + 1 }));
    } else {
      // Yoksa sepete ekle
      dispatch(addToBasket(product));
    }
  };

  const handleDecrease = () => {
    if (found.amount > 1) {
      // Miktar 1'den büyükse azalt
      dispatch(updateAmount({ ...found, amount: found.amount - 1 }));
    } else {
      // Miktar 1 ise sepetten kaldır
      dispatch(removeFromBasket(found.id));
    }
  };

  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border shadow p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition duration-300 bg-white">
      {/* Sol Taraf: Metin İçerikleri */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-serif font-[900]">{product.title}</h1>
          <p className="text-gray-500 my-1 line-clamp-2">{product.desc}</p>
        </div>
        <p className="text-lg font-serif font-[900]">{product.price}₺</p>
      </div>

      {/* Sağ Taraf: Görsel ve Buton Kapsayıcısı */}
      <div className="relative w-[115px] h-[115px]">
        <img
          src={product.photo}
          alt={product.title}
          className="rounded-md object-cover w-full h-full shadow-sm"
        />

        {/* Butonlar: Ürün sepetteyse farklı, değilse farklı görünür */}
        {found ? (
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full flex items-center shadow-md overflow-hidden h-8 border">
            <button
              onClick={handleDecrease}
              className="px-2 h-full hover:bg-red-100 transition-colors text-red-600"
            >
              <FaMinus size={12} />
            </button>
            <span className="px-2 font-bold text-red-600 min-w-[20px] text-center">
              {found.amount}
            </span>
            <button
              onClick={handleAdd}
              className="px-2 h-full hover:bg-red-100 transition-colors text-red-600 border-l"
            >
              <FaPlus size={12} />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="absolute -bottom-2 -right-2 bg-white rounded-full size-8 grid place-items-center font-bold shadow-md hover:bg-red-100 transition-colors text-red-600 border"
          >
            <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;