import ReactDOM from "react-dom";
import './OrderModal.css'

function OrderModal({ closeModal }) {
    const ordermodal = document.getElementById("order-modal");
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
    ordermodal
  );
}

export default OrderModal
