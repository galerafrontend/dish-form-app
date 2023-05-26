import * as Yup from "yup";

export const dishValidationSchema = Yup.object({
  name: Yup.string().required("Field is required"),
  preparation_time: Yup.string()
    .matches(
      /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
      "Invalid format. Please use HH:MM:SS"
    )
    .required("FIeld is required"),
  type: Yup.string().required("Filed is required"),
  no_of_slices: Yup.number().when("type", {
    is: "pizza",
    then: () =>
      Yup.number()
        .min(2, "It could be at least 2 slices")
        .max(10, "It could be a max of 10 slices")
        .required("Filed is required"),
  }),
  diameter: Yup.number().when("type", {
    is: "pizza",
    then: () =>
      Yup.number()
        .min(20.0, "It could be at least 20.00")
        .max(60.0, "It could be max of 60.00")
        .required("Filed is required"),
  }),
  spiciness_scale: Yup.number().when("type", {
    is: "soup",
    then: () =>
      Yup.number()
        .min(1, "Scale must be at least 1")
        .max(10, "Scale coold be a mx of 10")
        .required("FIeld is required"),
  }),
  slices_of_bread: Yup.number().when("type", {
    is: "sandwich",
    then: () =>
      Yup.number()
        .min(1, "It could be at least 1 slice")
        .max(10, "It could be max of 10 slices")
        .required("Filed is required"),
  }),
});
