import logo from "../assets/signUp.svg";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import userIcon from "../assets/user.svg";
import showPass from "../assets/showPass.svg";
import mail from "../assets/mail.svg";

const Login = () => {
  return (
    <section className="grid grid-cols-2 h-[100vh]">
      <div className="bg-primary-200 flex flex-col justify-start pt-6 items-center">
        <img src={logo} alt="" className="w-[500px] h-[300px]" />
        <div className="space-y-6 mt-8 mx-auto  w-[70%] flex flex-col justify-center items-center">
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

      <div className=" flex flex-col justify-between pt-6 items-start px-28">
        <div>
          <h2 className="h2 text-primary-200">Sign up</h2>
          <p className="text-primary-200 body-regular mb-12 font-[700]">
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
        <div className="mt-20 w-full">
          <Button
            bgColor="bg-primary-200"
            text="Sign Up"
            textColor="text-white"
            width="full"
          />
        </div>
        <p className="body-medium text-primary-200 mx-auto py-14">
          Already have an account?
          <span className=" font-extrabold"> Log In</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
