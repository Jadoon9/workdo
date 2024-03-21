import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  eventType: Yup.string().required("Event type is required"),
  totalGuests: Yup.number()
    .required("Total guests is required")
    .positive("Total guests must be positive"),
  date: Yup.date().required("Date is required"),
  phone: Yup.string().required("Phone number is required"),
  budget: Yup.number()
    .required("Budget is required")
    .positive("Budget must be positive"),
  eventTheme: Yup.string().required("Event theme is required"),
  eventDetails: Yup.string().required("Event details are required"),
});
