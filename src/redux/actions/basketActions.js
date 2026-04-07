import api from "../../api";
import ACTION_TYPES from "./actionTypes";

// Sepet verilerini API'den çek
export const getBasket = () => (dispatch) => {
  dispatch({ type: ACTION_TYPES.BASKET_LOADING });

  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: ACTION_TYPES.BASKET_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ACTION_TYPES.BASKET_ERROR, payload: err.message })
    );
};

// Sepete yeni eleman ekle veya miktarı güncelle
export const addToBasket = (product) => (dispatch) => {
  const newProduct = { ...product, amount: 1, productId: product.id };
  
  // JSON Server'a post isteği at
  api.post("/cart", newProduct).then((res) => {
    dispatch({
      type: ACTION_TYPES.ADD_TO_BASKET,
      payload: res.data,
    });
  });
};

// Sepetteki elemanın miktarını güncelle
export const updateAmount = (item) => (dispatch) => {
  api
    .patch(`/cart/${item.id}`, { amount: item.amount })
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE_BASKET,
        payload: res.data,
      });
    });
};

// Sepetten eleman kaldır
export const removeFromBasket = (id) => (dispatch) => {
  api.delete(`/cart/${id}`).then(() => {
    dispatch({
      type: ACTION_TYPES.REMOVE_FROM_BASKET,
      payload: id,
    });
  });
};
