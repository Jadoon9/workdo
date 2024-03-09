import logo from "../assets/signUp.svg";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import userIcon from "../assets/user.svg";
import showPass from "../assets/showPass.svg";
import mail from "../assets/mail.svg";

const Login = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
      <div className="bg-primary-200 flex flex-col justify-start items-center  pt-6 px-4 lg:px-28">
        <img
          src={logo}
          alt=""
          className="w-[300px] h-[180px] lg:w-[500px] lg:h-[300px] mb-8 lg:mb-0"
        />
        <div className="space-y-6 mt-4 lg:mt-8  mb-20 mx-auto lg:w-[70%] flex flex-col justify-center items-center">
          <Button
            text="Be the first to sign up for a Workdo account"
            borderWhite
            textColor="text-white"
            width="full"
            smallText
          />
          <Button
            text="List your business on Workdo"
            borderWhite
            textColor="text-white"
            width="full"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between pt-6 items-center lg:items-start px-4 lg:px-28">
        <div>
          <h2 className="h2 text-primary-200">Sign up</h2>
          <p className="text-primary-200 body-regular mb-8 lg:mb-12 font-[700]">
            Enter your details below to sign up
          </p>
        </div>
        <div className="w-full space-y-8">
          <Input
            placeholder="User Name"
            label="Full Name"
            borderWhite
            showIcon
            icon={userIcon}
          />
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
        <div className="w-full mt-4 lg:mt-8">
          <Button
            bgColor="bg-primary-200"
            text="Sign Up"
            textColor="text-white"
            width="full"
          />
        </div>
        <p className="body-medium text-primary-200 mt-4 lg:mt-0 mx-auto lg:py-14">
          Already have an account?
          <span className="font-extrabold"> Log In</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
