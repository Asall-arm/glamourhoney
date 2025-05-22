import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Error from "../../../Error/Error";
import "./Comments.css";
import DetailModal from "../../Components/DetailModal/DetailModal";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import EditModal from "../../Components/EditModal/EditModal";
import EndlessFooter from "../../../Footer/EndlessFooter";

const Comments = () => {
  const [allComments, setAllComments] = useState([]);
  const [mainCommentDescription, setMainCommentDescription] = useState("");
  const [isShowDetailModal, setIsShowDetailModal] = useState(false); //دکمه جزئیات
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false); //دکمه حذف
  const [commentID, setCommentID] = useState(null);
  const [isShowEditModal, setIsShowEditModal] = useState(false); //دکمه ویرایش
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false); //دکمه تایید
  const [isShowRejectModal, setIsShowRejectModal] = useState(false); //دکمه رد

  useEffect(() => {
    getAllComments();
  }, []);
  const getAllComments = () => {
    fetch("http://localhost:3000/comments")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
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
    console.log(commentID);
    fetch(`http://localhost:3000/comments/${commentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllComments();
      });
  };

  //////////////////////////////////////////////////////دکمه ویرایش
  const closeEditModal = () => setIsShowEditModal(false);
  const updateComment = (event) => {
    event.preventDefault();
    console.log("updated cm :)");

    fetch(`http://localhost:3000/comments/${commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: mainCommentDescription,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowEditModal(false);
        getAllComments();
      });
  };

  ///////////////////////////////////////////////////////////////دکمه تایید
  const handleCloseAcceptModal = () => setIsShowAcceptModal(false);
  const handleAcceptClick = () => setIsShowAcceptModal(true);
  const AcceptModalCancleAction = () => setIsShowAcceptModal(false);
  const AcceptModalSubmitAction = () => {
    console.log("accepted cm :)");
    fetch(`http://localhost:3000/comments/accept/${commentID}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowAcceptModal(false);
        getAllComments();
      });
  };

  /////////////////////////////////////////////// رد کردن کامنت‌ها
  const handleCloseRejectModal = () => setIsShowRejectModal(false);
  const handleRejectClick = () => setIsShowRejectModal(true);
  const RejectModalCancleAction = () => setIsShowRejectModal(false);
  const RejectModalSubmitAction = () => {
    console.log("rejected cm :)");
    fetch(`http://localhost:3000/comments/${commentID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isAccept: 0 }),
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowRejectModal(false);
        getAllComments();
      });
  };


  return (
    <>
      <Sidebar />
      <div className="dashboard-main">
        <Header />

        <div className="cms-main">
          <h1>لیست کامنت‌ها</h1>
          {allComments.length ? (
            <table className="cms-table ">
              <thead>
                <tr>
                  <th>اسم کاربر</th>
                  <th>محصول</th>
                  <th>کامنت</th>
                  <th>تاریخ</th>
                  <th>ساعت</th>
                </tr>
              </thead>

              <tbody>
                {allComments.map((comment) => (
                  <tr key={comment.id}>
                    <td>{comment.name}</td>
                    <td>{comment.product}</td>
                    <td>
                      <button
                        className="text-modal-btn"
                        onClick={() => {
                          setIsShowDetailModal(true);
                          setMainCommentDescription(comment.description);
                        }}
                      >
                        دیدن متن
                      </button>
                    </td>
                    <td>{comment.date}</td>
                    <td>{comment.time}</td>
                    <td>
                      <button
                        className="text-modal-btn"
                        onClick={() => {
                          setIsShowDeleteModal(true);
                          setCommentID(comment.id);
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
                          setMainCommentDescription(comment.description);
                        }}
                      >
                        ویرایش
                      </button>
                      <button className="text-modal-btn">پاسخ</button>

                      {comment.isAccept === 0 ? (
                        <button
                          className="text-modal-btn"
                          onClick={() => {
                            setIsShowAcceptModal(true);
                            setCommentID(comment.id);
                            handleAcceptClick();
                          }}
                        >
                          <DeleteModal
                            isVisible={isShowDeleteModal}
                            onClose={handleCloseModal}
                          />
                          تایید
                        </button>
                      ) : (
                        <button
                          className="text-modal-btn"
                          onClick={() => {
                            setIsShowRejectModal(true);
                            setCommentID(comment.id);
                            handleRejectClick();
                          }}
                        >
                          <DeleteModal
                            isVisible={isShowDeleteModal}
                            onClose={handleCloseModal}
                          />
                          رد
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Error msg="هیچ کامنتی" />
          )}

          {isShowDetailModal && (
            <DetailModal onClose={closeDetailModal}>
              <p className="text-modal">{mainCommentDescription}</p>
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
            <EditModal onClose={closeEditModal} onSubmit={updateComment}>
              <textarea
                value={mainCommentDescription}
                onChange={(event) =>
                  setMainCommentDescription(event.target.value)
                }
              ></textarea>
            </EditModal>
          )}

          {isShowAcceptModal && (
            <DeleteModal
              // title="آیا از تایید اطمینان دارید؟"
              isVisible={isShowAcceptModal}
              onClose={handleCloseAcceptModal}
              submit={AcceptModalSubmitAction}
              cancle={AcceptModalCancleAction}
            />
          )}

          {isShowRejectModal && (
            <DeleteModal
              isVisible={isShowRejectModal}
              onClose={handleCloseRejectModal}
              submit={RejectModalSubmitAction}
              cancle={RejectModalCancleAction}
            />
          )}
        </div>
      </div>
      <EndlessFooter />
    </>
  );
};

export default Comments;

// import React, { useEffect, useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Header from "../Header/Header";
// import Error from "../../Error/Error";
// import "./Comments.css";
// import DetailModal from "../DetailModal/DetailModal";
// import DeleteModal from "../DeleteModal/DeleteModal";

// const Comments = () => {
//   const [allComments, setAllComments] = useState([]);
//   const [mainCommentDescription, setMainCommentDescription] = useState("");
//   const [isShowDetailModal, setIsShowDetailModal] = useState(false);
//   const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
//   const [commentID, setCommentID] = useState(null)

//   useEffect(() => {
// getAllComments()
//   }, []);

//   function getAllComments (){
//     fetch("http://localhost:3000/comments")
//       .then((res) => res.json())
//       .then((comments) => setAllComments(comments));
//   }

//   const closeDetailModal = () => setIsShowDetailModal(false);
//   const closeDeleteModal = () => setIsShowDeleteModal(false);

//   const DeleteComment =()=> {
//     console.log('remove cm successfullly');
//     fetch(`http://localhost:3000/comments/${commentID}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then(result => {
//         setIsShowDeleteModal(false);
// getAllComments()
//       });
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className="dashboard-main">
//         <Header />

//         <div className="cms-main">
//           {allComments.length ? (
//             <table className="cms-table ">
//               <thead>
//                 <tr>
//                   <th>اسم کاربر</th>
//                   <th>محصول</th>
//                   <th>کامنت</th>
//                   <th>تاریخ</th>
//                   <th>ساعت</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {allComments.map((comment) => (
//                   <tr key={comment.id}>
//                     <td>{comment.name}</td>
//                     <td>{comment.product}</td>
//                     <td>
//                       <button
//                         className="text-modal-btn"
//                         onClick={() => {
//                           setIsShowDetailModal(true);
//                           setMainCommentDescription(comment.description);
//                         }}
//                       >
//                         دیدن متن
//                       </button>
//                     </td>
//                     <td>{comment.date}</td>
//                     <td>{comment.time}</td>
//                     <td>
//                       <button
//                         className="text-modal-btn"
//                         onClick={() => {setIsShowDeleteModal(true)
//                         setCommentID(comment.id)
//                     }}
//                       >

//                         حذف
//                       </button>
//                       <button className="text-modal-btn">ویرایش</button>
//                       <button className="text-modal-btn">پاسخ</button>
//                       <button className="text-modal-btn">تایید</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <Error msg="هیچ کامنتی" />
//           )}

//           {isShowDetailModal && (
//             <DetailModal onClose={closeDetailModal}>
//               <p className="text-modal">{mainCommentDescription}</p>
//               <button
//                 className="text-modal-close-btn"
//                 onClick={closeDetailModal}
//               >
//                 بستن
//               </button>
//             </DetailModal>
//           )}

//           {isShowDeleteModal && (
//             <DeleteModal
// cancle={closeDeleteModal}
// submit={DeleteComment}
//             />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Comments;
