import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Full name is required")
    .matches(/^[a-zA-Z\s]+$/, "Full name should contain only letters"),
  // .test("is-not-whitespace", "Full name cannot be empty", (value) => {
  //   // Check if the input consists only of whitespace characters
  //   return value.trim().length > 0;
  // }),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  eventType: Yup.string()
    .trim()
    .required("Event type is required")
    .test("is-not-whitespace", "Type cannot be empty", (value) => {
      // Check if the input consists only of whitespace characters
      return value.trim().length > 0;
    }),
  totalGuests: Yup.number()
    .required("Guests is required")
    .max(500, "Guests cannot exceed 500")
    .positive("Guests must be positive"),
  date: Yup.date()
    .required("Date is required")
    .min(
      new Date(new Date().setHours(0, 0, 0, 0)),
      "Date cannot be before the current date"
    ),
  phone: Yup.string().required("Mobile number is required"),
  budget: Yup.number()
    .required("Budget is required")
    .max(500, "Budget cannot exceed 10000")
    .positive("Budget must be positive"),

  eventTheme: Yup.string()
    .trim()
    .required("Event theme is required")
    .test("is-not-whitespace", "Theme cannot be empty", (value) => {
      // Check if the input consists only of whitespace characters
      return value.trim().length > 0;
    }),
  eventDetails: Yup.string()
    .trim()
    .required("Event details are required")
    .test("is-not-whitespace", "Full name cannot be empty", (value) => {
      // Check if the input consists only of whitespace characters
      return value.trim().length > 0;
    }),
});
