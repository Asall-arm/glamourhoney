import React, { useState } from "react";
import "./NewProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailModal from "../DetailModal/DetailModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollar } from "react-icons/ai";
import Error from "../../../Error/Error";

const NewProductsTable = ({ allProducts, getAllProducts }) => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [productID, setProductID] = useState(null); //set default later for this variable
  const [mainProductInfo, setMainProductInfo] = useState({});

  const [productNewName, setProductNewName] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewImage, setProductNewImage] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewColors, setProductNewColors] = useState("");
  const [productNewSale, setProductNewSale] = useState("");

  const handleDeleteClick = () => {
    setIsShowDeleteModal(true);
  };
  const handleCloseModal = () => {
    setIsShowDeleteModal(false);
  };

  const DeleteModalCancleAction = () => {
    console.log("Cancle action ;)");
    setIsShowDeleteModal(false);
  };

  const DeleteModalSubmitAction = () => {
    console.log("Submit action ;)");
    console.log(productID);
    fetch(`http://localhost:3000/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllProducts();
      });
  };

  const closeDetailModal = () => {
    console.log("closin detail action ;)");
    setIsShowDetailModal(false);
  };

  const updateProductInfo = (event) => {
    event.preventDefault();

    const productsNewInfo = {
      name: productNewName,
      price: productNewPrice,
      count: productNewCount,
      image: productNewImage,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColors,
    };

    fetch(`http://localhost:3000/products/${productID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productsNewInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getAllProducts();
      });
    console.log("editin product");
  };

  return (
    <>
      {allProducts.length ? (
        <table className="np-table">
          <thead>
            <tr className="np-table-heading-tr">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
              <th>تغیرات</th>
            </tr>
          </thead>

          <tbody>
            {allProducts.map((product) => (
              <tr key={product.id} className="np-table-tr">
                <td>
                  <img
                    src={product.image}
                    alt="NewProducts"
                    className="np-table-img"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="np-table-btn"
                    onClick={() => {
                      setIsShowDetailModal(true);
                      setMainProductInfo(product);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="np-table-btn"
                    onClick={() => {
                      setProductID(product.id);
                      handleDeleteClick();
                    }}
                  >
                    حذف
                  </button>
                  <DeleteModal
                    isVisible={isShowDeleteModal}
                    onClose={handleCloseModal}
                  />
                  <button
                    className="np-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setProductID(product.id);
                      setProductNewName(product.name);
                      setProductNewPrice(product.price);
                      setProductNewCount(product.count);
                      setProductNewImage(product.image);
                      setProductNewPopularity(product.popularity);
                      setProductNewSale(product.sale);
                      setProductNewColors(product.colors);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Error msg="هیچ محصولی" />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          // title=" ؟آیا از حذف اطمینان دارید "
          isVisible={isShowDeleteModal}
          onClose={handleCloseModal}
          submit={DeleteModalSubmitAction}
          cancle={DeleteModalCancleAction}
        />
      )}

      {isShowDetailModal && (
        <DetailModal onClose={closeDetailModal}>
          <table className="cms-table">
            <thead>
              <tr className="np-table-heading-tr">
                <th style={{ padding: "60px !important" }}>محبوبیت</th>
                <th style={{ padding: "60px !important" }}>فروش</th>
                <th style={{ padding: "60px !important" }}>رنگ‌بندی</th>
              </tr>
            </thead>
            <tbody>
              <tr className="np-table-tr">
                <td>{mainProductInfo.popularity}%</td>
                <td>{mainProductInfo.sale}</td>
                <td>{mainProductInfo.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailModal>
      )}

      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfo}
        >
          {/* {Children} */}
          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
              value={productNewName}
              onChange={(event) =>
                  setProductnewName(event.target.value)}
            />
          </div>

          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-input"
              value={productNewPrice}
              onChange={(event) =>
                  setProductnewPrice(event.target.value)}
            />
          </div>

          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="موجودی جدید را وارد کنید"
              className="edit-product-input"
              value={productNewCount}
              onChange={(event) =>
                  setProductnewCount(event.target.value)}
            />
          </div>

          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="کاور جدید را وارد کنید"
              className="edit-product-input"
              value={productNewImage}
              onChange={(event) =>
                  setProductnewImage(event.target.value)}
            />
          </div>

          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="محبوبیت محصول را وارد کنید"
              className="edit-product-input"
              value={productNewPopularity}
              onChange={(event) =>
                  setProductNewPopularity(event.target.value)}
            />
          </div>

          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="فروش محصول را وارد کنید"
              className="edit-product-input"
              value={productNewSale}
              onChange={(event) =>
                  setProductNewSale(event.target.value)}
            />
          </div>

          <div className="edit-product-form-group">
            <span>
              <AiOutlineDollar />
            </span>
            <input
              type="text"
              placeholder="رنگ‌بندی محصول را وارد کنید"
              className="edit-product-input"
              value={productNewColors}
              onChange={(event) =>
                  setProductNewColors(event.target.value)}
            />
          </div>
        </EditModal>
      )}
    </>
  );
};

export default NewProductsTable;
