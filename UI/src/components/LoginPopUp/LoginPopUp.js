import React, { useState } from 'react';

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <button onClick={togglePopup}>Login</button> */}
      
      {isOpen && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <h2>Login</h2>
            <form>
              <div>
                <label>Email:</label>
                <input type="email" required />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" required />
              </div>
              <button type="submit">Submit</button>
              <button type="button" onClick={togglePopup}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const popupStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const popupContentStyle = {
  background: '#fff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
};

export default LoginPopup;