import Button from "../components/common/Button";
import Input from "../components/common/Input";

const SubmitEvent = () => {
  return (
    <div className="paddingX my-12">
      <h2 className="h1-bold">
        Submit <br /> event <br /> detail
      </h2>
      <p className="body-regular w-[60%]">
        Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
        tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
        tristique nunc viverra vitae cursus massa. Eget at amet tristique
        ultrices auctor.
      </p>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6">
          <div className="mb-6">
            <Input placeholder="Ahmed Ali" label="email" />
          </div>
          <div className="mb-6">
            <Input placeholder="Birthday" label="Full Name" />
          </div>
          <div className="mb-6">
            <Input placeholder="Select Dates" label="Full Name" />
          </div>
          <div className="mb-6">
            <Input placeholder="Total or per person" label="Full Name" />
          </div>
        </div>
        <div className="col-span-6">
          <div className="mb-6">
            <Input placeholder="ahmad@gmail.com" label="Full Name" />
          </div>
          <div className="mb-6">
            <Input placeholder="56" label="Full Name" />
          </div>
          <div className="mb-6">
            <Input placeholder="+920000000000" label="Full Name" />
          </div>
          <div className="mb-6">
            <Input placeholder="Batman birthday theme" label="Full Name" />
          </div>
        </div>
        <div className="col-span-12 ">
          <label htmlFor="">WRITE IN DETAILS ABOUT THE EVENT</label>
          <textarea
            className={`w-full px-12 py-4 bg-secondary-200 border-2 rounded-[45px] outline-none border-primary-200  hover:opacity-85`}
            style={{ "::placeholder": { color: "#0C190E" } }}
            placeholder="Write the details about your special events..."
            name=""
            id=""
            cols="30"
            rows="7"
          ></textarea>
        </div>
        <div className="float-right col-span-12 flex justify-end mt-8">
          <div className="w-1/2">
            <Button
              text="Subscribe"
              bgColor="bg-primary-200"
              textColor="text-white"
              width="full"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitEvent;
