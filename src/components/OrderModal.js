import ReactDOM from "react-dom";
import './OrderModal.css'

function OrderModal({ closeModal }) {
  return ReactDOM.createPortal(
    <div className="loading-overlay" onClick={closeModal}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Loading...</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    document.body
  );
}

export default OrderModal
