import ReactDOM from "react-dom";
import "./LoginModal.css";
import { useContext, useState } from "react";
import LoginContext from "../contexts/LoginContext";

function LoginModal({ closeModal }) {

  const modalRoot = document.getElementById("modal-root");
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  if (isLoggedIn) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {

    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }

    return newErrors;
  };

  const handleLogin = () => {

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("User Data:", formData);

    setIsLoggedIn(true);
    closeModal();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <div className="modal-buttons">
          <button onClick={handleLogin}>Login</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default LoginModal;