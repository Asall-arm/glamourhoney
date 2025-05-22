import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Error from "../../../Error/Error";
import DetailModal from "../../Components/DetailModal/DetailModal"
import EndlessFooter from '../../../Footer/EndlessFooter'

const Orders = () => {
  const [order, setOrder] = useState([]);
  // const [mainOrderID, setMainOrderID] = useState(null);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false); //دکمه جزییات
  const [mainOrderInfo,setMainOrderInfo] = useState({})

  useEffect(() => {
    getAllOrder();
  }, []);
  const getAllOrder = () => {
    fetch("http://localhost:3000/order")
      .then((res) => res.json())
      .then((order) => setOrder(order));
  };

  const closeDetailModal = () => setIsShowDetailModal(false); //دکمه جزئیات

  // const handleAddOrder = () => {};

  return (
    <>
      <Sidebar />
      <div className="dashboard-main">
        <Header />

        <div className="cms-main">
          <h1 className="cms-title">لیست سفارشات</h1>
          {/* <button onClick={handleAddOrder}>افزودن سفارش جدید</button> */}
          {order.length ? (
            <table className="cms-table ">
              <thead>
                <tr>
                  <th>شماره سفارش</th>
                  <th>نام مشتری</th>
                  <th>عملگرها</th>
                </tr>
              </thead>
              <tbody>
                {order.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>

                      <button
                        className="text-modal-btn"
                        onClick={() => {
                          setMainOrderInfo(order);
                          setIsShowDetailModal(true);
                        }}
                      >جزییات
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Error msg="هیچ سفارشی" />
          )}

{isShowDetailModal && (
            <DetailModal onClose={closeDetailModal}>
              <table className="cms-table">
                <thead>
                  <tr className="np-table-heading-tr">
                    <th style={{ padding: "60px !important" }}>مجموع قیمت</th>
                    <th style={{ padding: "60px !important" }}>وضعیت سفارش</th>
                    <th style={{ padding: "60px !important" }}>تاریخ سفارش</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="np-table-tr">
                    <td>{mainOrderInfo.total} تومان</td>
                    <td>{mainOrderInfo.status}</td>
                    <td>{mainOrderInfo.date}</td>
                  </tr>
                </tbody>
              </table>
              <button
                className="text-modal-close-btn"
                onClick={closeDetailModal}
              >
                بستن
              </button>
            </DetailModal>
          )}

        </div>
      </div>
      <EndlessFooter />
    </>
  );
};

export default Orders;
