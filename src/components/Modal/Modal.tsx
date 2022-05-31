import React from 'react';
import { Wrapper } from './Modal.styles';

interface Props {}

const Modal: React.FC<Props> = (): JSX.Element => {
  return (
    <Wrapper>
      <input
        type="checkbox"
        className="modal-control"
        id="modal-1"
        name="modal-1"
      />
      <label htmlFor="modal-1">Open modal</label>
      <label htmlFor="modal-1" className="modal-background"></label>
      <div className="modal">
        <div className="modal-header">
          <h3>Modal Title</h3>
          <label htmlFor="modal-1" className="cursor-pointer squishy">
            Close
          </label>
        </div>
        <div className="modal-content">
          <p>lorem...</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
