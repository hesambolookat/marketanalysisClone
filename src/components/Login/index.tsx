import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOff, IoEye} from "react-icons/io5"; 
import { IoIosArrowBack } from "react-icons/io";
import Input from "../Input";
import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";


type LoginFormInputs = {
  password: string;
  number: string; 
  code: string; 
};

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.loginPage}>

      <div className={styles.loginContainer}>
      <div className={styles.headerLogo}>
          <img src={logo} alt="Logo" />
        </div>
      {/* Arrow left*/}
        <div className={styles.headrTitle}>
            <IoIosArrowBack 
            className={styles.backArrow} 
            size={24} 
            onClick={() => navigate("/")} 
        />
        <h2 className={styles.title}>Login</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          
          {/* Input for phone number */}
         
          <div className={styles.numberInput}>
            <span>+</span>
            <div className={styles.codeInput}>
            <h3>Code</h3>
            <Input
            type="number"
            placeholder="98"
            registerOption={register("code", { required: "your country is not supported" ,
                maxLength: { value: 3, message: "Code must be 3 digits" },
                pattern: { value: /^[0-9]+$/, message: "Only numbers are allowed" },
             })}
            error={errors.code}
            className= {`${styles.codeNumber} ${errors.code && styles.errorBorder}`}
          />
          </div>
          <div className={styles.codeInput}>
          <h3>Phone Number</h3>   
          <Input
            
            type="string"
            placeholder="example : 9XXXXXXXXXX"
            registerOption={register("number", { required: "The mobile phone is incorrect" ,
                pattern: { value: /^[0-9]+$/, message: "Only numbers are allowed" },

            })}
            error={errors.number}
            className={`${styles.phoneNumber} ${errors.number && styles.errorBorder}`}
          />
          </div>
          </div>
          
          {/* Input for Password */}
          <div className={styles.codeInput}>
          <h3>password</h3>
          <div className={styles.passwordContainer}>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              registerOption={register("password", {
                required: "Password is required",
              })}
              error={errors.password}
              className={`${styles.password} ${errors.password && styles.errorBorder}`}
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEye size={24} /> : <IoEyeOff size={24} />}
            </span>
          </div>
          </div>
          
           {/* Forget Password Link */}
           <div className={styles.forgotPassword}>
            <Link to="/ForgetPassword" className={styles.forgotPasswordLink}>
              Forget Password?
            </Link>
          </div>

          {/*login button*/}
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
          
          {/* link to signup*/}
        <p className={styles.registerText}>
          Haven’t registered yet?{" "}
          <Link to="/signup" className={styles.registerLink}>Register</Link>
        </p>
        </form>

        
      </div>
    </div>
  );
};

export default Login;
