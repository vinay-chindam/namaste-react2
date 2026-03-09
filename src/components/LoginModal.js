import ReactDOM from "react-dom";
import "./LoginModal.css";

function LoginModal({ closeModal }) {

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Login</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <div className="modal-buttons">
          <button>Login</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default LoginModal;