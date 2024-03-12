import logo from "../assets/loginLogo.svg";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import userIcon from "../assets/user.svg";
import showPass from "../assets/showPass.svg";
import mail from "../assets/mail.svg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
      <div className="flex flex-col justify-center items-center lg:items-start px-6 lg:px-28">
        <div>
          <h2 className="h2 text-primary-200">Log in</h2>
          <p className="text-primary-200 body-regular mb-8 font-light">
            Enter your account details to access account
          </p>
        </div>
        <div className="w-full space-y-8">
          <Input
            placeholder="Email"
            label="Email"
            borderWhite
            showIcon
            icon={mail}
          />
          <Input
            placeholder="Password"
            label="Password"
            borderWhite
            showIcon
            icon={showPass}
          />
        </div>

        <div className="flex justify-between w-full my-8">
          <div className="flex gap-x-4 items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-primary-200"
            />
            <p className="body-medium text-primary-200">Remember Me!</p>
          </div>
          <p className="body-medium text-primary-200">Recover Password</p>
        </div>
        <div className="w-full">
          <Button
            bgColor="bg-primary-200"
            text="Log in"
            textColor="text-white"
            width="full"
          />
        </div>
        <p className="body-medium text-primary-200 mx-auto py-14">
          Don't have an account?{" "}
          <span
            className="font-extrabold cursor-pointer"
            onClick={() => navigate("/sign-up")}
          >
            Create An Account
          </span>
        </p>
      </div>
      <div className="bg-primary-200 flex justify-center items-center hidden lg:flex">
        <img src={logo} alt="" className="w-[500px] h-[500px]" />
      </div>
    </section>
  );
};

export default SignUp;
