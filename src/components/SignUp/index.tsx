import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Input from "../Input";
import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";


type FormInputs = {
  number: string; 
  code: string; 

};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
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
        <h2 className={styles.title}>Sign Up</h2>
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

          {/*login button*/}
          <button type="submit" className={styles.submitButton}>
            Send Verification Code
          </button>
          
          {/* link to signup*/}
        <p className={styles.registerText}>
        Already have an account?{" "}
          <Link to="/login" className={styles.registerLink}>Sign in</Link>
        </p>
        </form>

        
      </div>
    </div>
  );
};

export default SignUp;
