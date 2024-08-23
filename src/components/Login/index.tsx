import React from 'react';
import styles from "./styles.module.css";

const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <img src="/path-to-your-logo.png" alt="Logo" className={styles.logo} />
        <h2 className={styles.loginTitle}>Login</h2>
        <form className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.inputLabel}>Phone Number</label>
            <div className={styles.phoneInput}>
              <input type="text" id="code" className={styles.codeInput} placeholder="+98" />
              <input type="text" id="phone" className={styles.phoneInputField} placeholder="9xxxxxxxxx" />
            </div>
          </div>
          <div className={styles.inputgroup}>
            <label htmlFor="password" className={styles.inputLabel}>Password</label>
            <input type="password" id="password" className={styles.inputField} />
          </div>
          <div className={styles.forgotPassword}>
            <a href="#">Forget password?</a>
          </div>
          <button type="submit" className={styles.loginButton}>Sign in</button>
          <div className={styles.registerLink}>
            Haven’t registered yet? <a href="#">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
