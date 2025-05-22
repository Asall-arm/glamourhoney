import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Error from "../../../Error/Error";
import "./Users.css";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import EditModal from "../../Components/EditModal/EditModal";
import DetailModal from "../../Components/DetailModal/DetailModal";
import { AiOutlineDollar } from "react-icons/ai";
import EndlessFooter from '../../../Footer/EndlessFooter'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [mainUserID, setMainUserID] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false); //دکمه حذف
  const [isShowEditModal, setIsShowEditModal] = useState(false); //دکمه ویرایش
  const [isShowDetailModal, setIsShowDetailModal] = useState(false); //دکمه جزییات
  const [mainUserInfo, setMainUserInfo] = useState({});

  const [userNewFirstname, setUserNewFirstname] = useState("");
  const [userNewLastname, setUserNewLastname] = useState("");
  const [userNewUsername, setUserNewUsername] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPhone, setUserNewPhone] = useState("");
  const [userNewEmail, setUserNewEmail] = useState("");
  const [userNewAddress, setUserNewAddress] = useState("");
  const [userNewScore, setUserNewScore] = useState("");
  const [userNewBuy, setUserNewBuy] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = () => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  };

  const closeDetailModal = () => setIsShowDetailModal(false); //دکمه جزئیات

  //////////////////////////////////////////////////////////////دکمه حذف
  const handleCloseModal = () => setIsShowDeleteModal(false);
  const handleDeleteClick = () => setIsShowDeleteModal(true);
  const DeleteModalCancleAction = () => {
    console.log("Cancle action ;)");
    setIsShowDeleteModal(false);
  };
  const DeleteModalSubmitAction = () => {
    console.log("Submit action ;)");
    console.log(mainUserID);
    fetch(`http://localhost:3000/users/${mainUserID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllUsers();
      });
  };

  //////////////////////////////////////////////////////دکمه ویرایش
  const closeEditModal = () => setIsShowEditModal(false);
  const updateUser = (event) => {
    event.preventDefault();
    console.log("updated usrs :)");
    const userNewInfo = {
      firstname: userNewFirstname,
      lastname: userNewLastname,
      username: userNewUsername,
      password: userNewPassword,
      phone: userNewPhone,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };

    fetch(`http://localhost:3000/users/${mainUserID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowEditModal(false);
        getAllUsers();
      });
  };

  return (
    <>
      <Sidebar />
      <div className="dashboard-main">
        <Header />

        <div className="cms-main">
          <h1 className="cms-title">لیست کاربران</h1>
          {users.length ? (
            <table className="cms-table ">
              <thead>
                <tr>
                  <th>نام و نام‌خانوادگی کاربر</th>
                  <th>یوزرنیم</th>
                  <th>رمز عبور</th>
                  <th>شماره تماس</th>
                  <th>ایمیل</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      {user.firstname} {user.lastname}
                    </td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className="text-modal-btn"
                        onClick={() => {
                          setIsShowDeleteModal(true);
                          setMainUserID(user.id);
                          handleDeleteClick();
                        }}
                      >
                        <DeleteModal
                          isVisible={isShowDeleteModal}
                          onClose={handleCloseModal}
                        />
                        حذف
                      </button>

                      <button
                        className="text-modal-btn"
                        onClick={() => {
                          setIsShowEditModal(true);
                          setMainUserID(user.id);
                          setUserNewFirstname(user.firstname);
                          setUserNewLastname(user.lastname);
                          setUserNewUsername(user.username);
                          setUserNewPassword(user.password);
                          setUserNewPhone(user.phone);
                          setUserNewEmail(user.email);
                          setUserNewAddress(user.address);
                          setUserNewScore(user.score);
                          setUserNewBuy(user.buy);
                        }}
                      >
                        ویرایش
                      </button>

                      <button
                        className="text-modal-btn"
                        onClick={() => {
                          setMainUserInfo(user);
                          setIsShowDetailModal(true);
                        }}
                      >
                        جزییات
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Error msg="هیچ کاربری" />
          )}

          {isShowDetailModal && (
            <DetailModal onClose={closeDetailModal}>
              <table className="cms-table">
                <thead>
                  <tr className="np-table-heading-tr">
                    <th style={{ padding: "60px !important" }}>آدرس</th>
                    <th style={{ padding: "60px !important" }}>امتیاز</th>
                    <th style={{ padding: "60px !important" }}>میزان خرید</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="np-table-tr">
                    <td>{mainUserInfo.address}</td>
                    <td>{mainUserInfo.score}</td>
                    <td>{mainUserInfo.buy}</td>
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

          {isShowDeleteModal && (
            <DeleteModal
              // title="آیا از حذف اطمینان دارید؟"
              isVisible={isShowDeleteModal}
              onClose={handleCloseModal}
              submit={DeleteModalSubmitAction}
              cancle={DeleteModalCancleAction}
            />
          )}

          {isShowEditModal && (
            <EditModal onClose={closeEditModal} onSubmit={updateUser}>
              <div
                className="edit-user-info-input-group"
                onClose={closeEditModal}
                onSubmit={updateUser}
              >
                <span>
                  <AiOutlineDollar />
                </span>
                <input
                  className="edit-user-info-input"
                  placeholder="مقدار جدید را وارد نمایید."
                  value={userNewFirstname}
                  onChange={(event) => setUserNewFirstname(event.target.value)}
                />
              </div>

              <div className="edit-user-info-input-group">
                <span>
                  <AiOutlineDollar />
                </span>
                <input
                  className="edit-user-info-input"
                  placeholder="مقدار جدید را وارد نمایید."
                  value={userNewLastname}
                  onChange={(event) => setUserNewLastname(event.target.value)}
                />
              </div>

              <div className="edit-user-info-input-group">
                <span>
                  <AiOutlineDollar />
                </span>
                <input
                  className="edit-user-info-input"
                  placeholder="مقدار جدید را وارد نمایید."
                  value={userNewUsername}
                  onChange={(event) => setUserNewUsername(event.target.value)}
                />
              </div>

              <div className="edit-user-info-input-group">
                <span>
                  <AiOutlineDollar />
                </span>
                <input
                  className="edit-user-info-input"
                  placeholder="مقدار جدید را وارد نمایید."
                  value={userNewPassword}
                  onChange={(event) => setUserNewPassword(event.target.value)}
                />
              </div>

              <div className="edit-user-info-input-group">
                <span>
                  <AiOutlineDollar />
                </span>
                <input
                  className="edit-user-info-input"
                  placeholder="مقدار جدید را وارد نمایید."
                  value={userNewPhone}
                  onChange={(event) => setUserNewPhone(event.target.value)}
                />
              </div>

              <div className="edit-user-info-input-group">
                <span>
                  <AiOutlineDollar />
                </span>
                <input
                  className="edit-user-info-input"
                  placeholder="مقدار جدید را وارد نمایید."
                  value={userNewEmail}
                  onChange={(event) => setUserNewEmail(event.target.value)}
                />
              </div>

              <div className="edit-user-info-input-group">
                <span>
                  <AiOutlineDollar />
                </span>
                <textarea
                  className="edit-user-info-input"
                  placeholder="مقدار جدید را وارد نمایید."
                  value={userNewAddress}
                  onChange={(event) => setUserNewAddress(event.target.value)}
                ></textarea>
              </div>

              <div className="edit-user-info-input-group">
                <span>
                  <AiOutlineDollar />
                </span>
                <input
                  className="edit-user-info-input"
                  placeholder="مقدار جدید را وارد نمایید."
                  value={userNewScore}
                  onChange={(event) => setUserNewScore(event.target.value)}
                />
              </div>

              <div className="edit-user-info-input-group">
                <span>
                  <AiOutlineDollar />
                </span>
                <input
                  className="edit-user-info-input"
                  placeholder="مقدار جدید را وارد نمایید."
                  value={userNewBuy}
                  onChange={(event) => setUserNewBuy(event.target.value)}
                />
              </div>
              <button
                className="text-modal-close-btn"
                onClick={closeEditModal}
              >
                بستن
              </button>
            </EditModal>
          )}
        </div>
      </div>
      <EndlessFooter />
    </>
  );
};

export default Users;
