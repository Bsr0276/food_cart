import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/loader";
import Error from "../../components/error";
import CartItem from "./cart-item";

const Cart = () => {
  const { isLoading, error, data } = useSelector((store) => store.basketReducer);

  const totalPrice = data.reduce((total, item) => total + item.price * item.amount, 0);

  if (isLoading) return <Loader />;

  if (error) return <Error info={error} />;

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-10">Sepetiniz</h1>

      <div className="grid lg:grid-cols-[1fr_350px] gap-10">
        {/* Ürün Listesi */}
        <div>
          {data.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-lg shadow">
              <p className="text-gray-500 mb-5">Sepetiniz henüz boş.</p>
              <Link
                to="/"
                className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
              >
                Ürünlere Göz At
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {data.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Sipariş Özeti */}
        <div className="bg-white p-5 rounded-lg shadow h-fit">
          <h2 className="text-xl font-bold mb-5 border-b pb-3">Sipariş Özeti</h2>
          
          <div className="flex justify-between mb-3 text-gray-600">
            <span>Ürün Toplamı</span>
            <span>{totalPrice.toFixed(2)} ₺</span>
          </div>
          
          <div className="flex justify-between mb-3 text-gray-600">
            <span>Teslimat Ücreti</span>
            <span>0.00 ₺</span>
          </div>

          <div className="flex justify-between mt-5 pt-5 border-t text-xl font-bold">
            <span>Toplam</span>
            <span className="text-red-500">{totalPrice.toFixed(2)} ₺</span>
          </div>

          <button className="w-full bg-red-500 text-white py-3 rounded-md mt-10 font-bold hover:bg-red-600 transition disabled:bg-gray-400" disabled={data.length === 0}>
            Siparişi Tamamla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;