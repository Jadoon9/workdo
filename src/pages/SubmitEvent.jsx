import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { validationSchema } from "../utils/validations";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addEvent } from "../services/actions/events";
import DatePicker from "../components/common/DatePicker";

const SubmitEvent = () => {
  const { mutate, isPending: pendingNewsLetter } = useMutation({
    mutationFn: addEvent,
    onError: (data) => {
      console.log(data, "jkjkj");
      toast.error(data?.response?.data?.email[0]);
    },
  });

  return (
    <div className=" paddingXS lg:px-32   my-12">
      <h2 className="h2-55 md:h2 lg:h1-bold neue800">
        Submit <br /> event <br /> details
      </h2>
      <p className="body-regular lg:body-regular1 w-full md:w-[60%]">
        Lorem ipsum dolor sit amet consectetur. Etiam et cras sit quisque
        tortor. Eget in vel mattis quis ultricies libero pharetra. Porta
        tristique nunc viverra vitae cursus massa. Eget at amet tristique
        ultrices auctor.
      </p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          eventType: "",
          totalGuests: "",
          date: "",
          phone: "",
          budget: "",
          eventTheme: "",
          eventDetails: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const data = {
            full_name: values.name,
            email: values.email,
            event_type: values.eventType,
            no_of_guests: values.totalGuests,
            preferred_date: values.date,
            mobile_number: values.phone,
            budget: values.budget,
            preferred_theme: values.eventTheme,
            details: values.eventDetails,
          };

          mutate(data, {
            onSuccess: () => {
              toast.success("Successfully Subscribed");
              resetForm();
            },
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-12 gap-8 w-full mt-8">
            <div className="col-span-12 md:col-span-6">
              <div className="mb-8   w-[98%] lg:w-full">
                <Input placeholder="Ahmed Ali" label="Full Name" name="name" />
              </div>
              <div className="mb-8  w-[98%]  lg:w-full">
                <Input
                  placeholder="Event Type"
                  label="Event Type"
                  name="eventType"
                  type="text"
                />
              </div>
              <div className="mb-8  w-[98%] lg:w-full">
                <Input
                  type="date"
                  placeholder="Select Dates"
                  label="Preferred Dates"
                  name="date"
                />
              </div>
              <div className="mb-8    w-[98%] lg:w-full">
                <Input
                  placeholder="Total or per person"
                  label="Budget"
                  name="budget"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="mb-8 w-[98%] md:w-full">
                <Input
                  placeholder="ahmad@gmail.com"
                  label="Email"
                  name="email"
                />
              </div>
              <div className="mb-8  w-[98%]  lg:w-full">
                <Input
                  type="number"
                  placeholder="56"
                  label="No. of Guests"
                  name="totalGuests"
                  onKeyDown={(e) => {
                    if (e.key === "." || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="mb-8  w-[98%]  lg:w-full">
                <Input
                  type="number"
                  placeholder="+920000000000"
                  label="Mobile Number"
                  name="phone"
                  onKeyDown={(e) => {
                    if (e.key === "." || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="mb-8  w-[98%]  lg:w-full">
                <Input
                  placeholder="Batman Birthday Theme"
                  label="Prefered Theme"
                  name="eventTheme"
                />
              </div>
            </div>
            <div className="col-span-12 mb-8   w-[98%] lg:w-full ">
              <label className="neue700" htmlFor="">
                WRITE IN DETAILS ABOUT THE EVENT
              </label>
              <Field
                as="textarea"
                className="w-full px-6 lg:px-12 py-4 bg-secondary-200 border-2 rounded-[45px] outline-none border-primary-200 hover:opacity-85"
                style={{ "::placeholder": { color: "#0C190E" } }}
                placeholder="Write The Details About Your Special Events..."
                name="eventDetails"
                id="eventDetails"
                cols="30"
                rows="7"
              />
              <ErrorMessage
                name="eventDetails"
                component="div"
                className="text-red-700 futura500  "
              />
            </div>
            <div className="col-span-12 flex md:justify-end mt-0 lg:mt-8">
              <div className="w-full md:w-[45%]">
                <Button
                  text="Subscribe"
                  bgColor="bg-primary-200"
                  textColor="text-white"
                  width="w-full"
                  type="submit"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubmitEvent;
