import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Model.css'
const Model = ({ closeModel, children }) => {
  return (
    <div className="parent-of-model">
      <form className={`modal`}>
        <div
          onClick={() => {
            closeModel();
          }}
          className="close"
        >
          <CloseIcon />
        </div>
        {children}
      </form>
    </div>
  );
}
export default Model;
