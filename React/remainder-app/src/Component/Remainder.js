let Remainder = () => {
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="remainder-list">
        <div className="remainder-item">
          <hr />
          <span>
            <div className="checker">
              <span className="">
                <input type="checkbox" />
              </span>
            </div>
          </span>
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
              <button type="button" className="btn btn-primary">
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
