import React from "react";
import { useFormik } from "formik";

function Contactform() {
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      subjectDetails: "",
    },
    onSubmit: (values) => {
      console.log("Form values", values);
    },
  });

  return (
    <React.Fragment>
      {/* <!-- Modal --> */}
      <form onSubmit={formik.handleSubmit}>
        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Contact{" "}
                  <meta
                    httpEquiv="Content-Type"
                    content="text/html;charset=UTF-8"
                  />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    name="emailAddress"
                    onChange={formik.handleChange}
                    value={formik.values.emailAddress}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Subject details
                  </label>
                  <textarea
                    className="form-control"
                    id="subjectDetails"
                    name="subjectDetails"
                    onChange={formik.handleChange}
                    value={formik.values.subjectDetails}
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Contactform;
