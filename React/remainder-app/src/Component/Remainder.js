import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../Config/firebase.config";
import EditRemainder from "./EditRemainder";

let Remainder = () => {
  const collectionRef = collection(db, "remainder");
  // console.log(collectionRef);
  const [createRemainder, setCreateRemainder] = useState("");
  const [remainders, setRemainders] = useState([]);

  useEffect(() => {
    const getRemainders = async () => {
      await getDocs(collectionRef).then((remainder) => {
        console.log(remainder.docs);
      });
    };
    getRemainders();
  }, []);

  const submitRemainder = async (e) => {
    e.preventDefault();
    // console.log("Submit");
    try {
      await addDoc(collectionRef, {
        remainder: createRemainder,
        isChecked: false,
        timestamp: serverTimestamp(),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Modal Trigger Button */}
      <div className="container">
        <h2 className="display-3 text-center">REMAINDER APP</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <button
                  // Bootstrap modal
                  data-bs-toggle="modal"
                  data-bs-target="#addModal"
                  type="button"
                  className="btn btn-primary"
                >
                  Add Remainder
                </button>
                <div className="remainder-list">
                  <div className="remainder-item">
                    <hr />
                    <span>
                      <div className="checker">
                        <span className="">
                          <input type="checkbox" />
                        </span>
                      </div>{" "}
                      Do React Assignments <br />
                      <i>26/04/2023</i>
                    </span>
                    <span className="float-end mx-3">
                      <EditRemainder />
                    </span>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="addModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                ADD REMAINDER
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Add Remainder"
                onChange={(e) => setCreateRemainder(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitRemainder}
              >
                Create Remainder
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Remainder;
