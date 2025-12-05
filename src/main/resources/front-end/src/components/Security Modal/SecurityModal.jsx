import "../Security Modal/SecurityModal.css";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../features/securitySlice";
import Dialog from "@mui/material/Dialog";
import { useState, useEffect } from "react";

const SecurityModal = () => {
  const showModal = useSelector((state) => state.security.showModal);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (showModal) {
      window.scrollTo({ top: 0 });
    }
  }, [showModal]);

  const handleCheck = (event) => {
    setChecked(event.target.checked);

    if (event.target.checked) {
      setTimeout(() => {
        dispatch(hideModal());
      }, 2000);
    }
  };

  return (
    <Dialog
      open={showModal}
      slotProps={{
        backdrop: {
          style: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        },
      }}
    >
      <div className="dialog">
        <h2>Important Security Message</h2>
        <h3>Do not share login details between users</h3>
        <h3>
          This dashboard displays Official Sensitive data which must only be
          viewed by those with appropriate access. Failure to comply risks
          shutdown of the service.
        </h3>
        <div className="govuk-form-group">
          <div className="govuk-checkboxes govuk-checkboxes--small">
            <div className="govuk-checkboxes__item">
              <input
                className="govuk-checkboxes__input"
                type="checkbox"
                onChange={handleCheck}
                disabled={checked}
                id="checkbox--agree"
              />
              <label
                className="govuk-label govuk-checkboxes__label"
                htmlFor="checkbox--agree"
              >
                I agree to the above
              </label>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SecurityModal;
