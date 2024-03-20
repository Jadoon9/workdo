import Button from "../components/common/Button";
import Input from "../components/common/Input";

const SubmitEvent = () => {
  return (
    <div className="paddingXS lg:paddingX  my-12">
      <h2 className="h2-55 md:h2 lg:h1-bold">
        Submit <br /> event <br /> detail
      </h2>
      <p className="body-regular lg:body-regular1 w-full md:w-[60%]">
        Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
        tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
        tristique nunc viverra vitae cursus massa. Eget at amet tristique
        ultrices auctor.
      </p>
      <div className="grid grid-cols-12 gap-8 w-full mt-8">
        <div className="col-span-12 md:col-span-6">
          <div className="mb-8 w-[90%] lg:w-full">
            <Input placeholder="Ahmed Ali" label="Name" />
          </div>
          <div className="mb-8 w-[90%] lg:w-full">
            <Input placeholder="Birthday" label="Birthday" />
          </div>
          <div className="mb-8 w-[90%] lg:w-full">
            <Input placeholder="Select Dates" label="Select Dates" />
          </div>
          <div className="mb-8 w-[90%] lg:w-full">
            <Input
              placeholder="Total or per person"
              label="Total or per person"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="mb-8 w-[90%] lg:w-full">
            <Input placeholder="ahmad@gmail.com" label="Email" />
          </div>
          <div className="mb-8 w-[90%] lg:w-full">
            <Input placeholder="56" label="Age" />
          </div>
          <div className="mb-8 w-[90%] lg:w-full">
            <Input placeholder="+920000000000" label="Phone" />
          </div>
          <div className="mb-8 w-[90%] lg:w-full">
            <Input placeholder="Batman birthday theme" label="Event Theme" />
          </div>
        </div>
        <div className="col-span-12 mb-8 w-[90%] lg:w-full ">
          <label htmlFor="">WRITE IN DETAILS ABOUT THE EVENT</label>
          <textarea
            className="w-full px-6 lg:px-12 py-4 bg-secondary-200 border-2 rounded-[45px] outline-none border-primary-200 hover:opacity-85"
            style={{ "::placeholder": { color: "#0C190E" } }}
            placeholder="Write the details about your special events..."
            name=""
            id=""
            cols="30"
            rows="7"
          ></textarea>
        </div>
        <div className="col-span-12 flex justify-end mt-0 lg:mt-8">
          <div className="w-full md:w-1/2">
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
