import React from "react";
import { Modal } from "react-bootstrap";
import { ReactComponent as warningIcon } from "../../assets/img/warning.svg";
import { ReactComponent as infoIcon } from "../../assets/img/info.svg";

const MessageModal = ({ show, onHide, msg, type, ...props }) => {
  const IconStatus = type !== 0 ? infoIcon : warningIcon;

  return (
    <Modal
      {...{ show, onHide, ...props }}
      animation={false}
      dialogClassName="modal-todo-information"
      aria-labelledby="contained-modal-title-vcenter"
      data-cy="modal-information"
      size="lg"
      centered
    >
      <Modal.Body>
        <div data-cy="modal-information-icon" className="text-center">
            <IconStatus style={{width:60,height:60,textAlign:'center'}}/>
          </div>

          <div
            className="modal-todo-information__title"
            data-cy="modal-information-title"
            style={{marginTop:18}}
          >
            {msg}
          </div>
      </Modal.Body>
    </Modal>
  );
};

export default React.memo(MessageModal);
