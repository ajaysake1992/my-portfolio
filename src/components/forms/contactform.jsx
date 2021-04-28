import React from "react";
import { useFormik } from "formik";
import './contactform.scss';

const initialValues = {
  emailAddress: "",
  subjectDetails: "",
};

// const onSubmit = (values) => {
//   console.log('textInput', textInput);
// };

const validate = (values) => {
  let errors = {};

  if (!values.emailAddress) errors.emailAddress = "This is required field.";
  else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.emailAddress
    )
  )
    errors.emailAddress = "This is invalid email.";

  if (!values.subjectDetails) errors.subjectDetails = "This is required field.";

  return errors;
};

function Contactform(props) {
  
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      // post form data using axios
    },
    validate,
  });

  console.log('Form toched', formik.touched);

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
                    {...formik.getFieldProps('emailAddress')}
                    placeholder="name@example.com"
                  />
                  { formik.touched.emailAddress && formik.errors.emailAddress ? <div className="inline-error">{formik.errors.emailAddress}</div> : null}
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
                    {...formik.getFieldProps('subjectDetails')}
                    rows="3"
                  ></textarea>
                  { formik.touched.subjectDetails && formik.errors.subjectDetails ? <div className="inline-error">{formik.errors.subjectDetails}</div> : null}
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
