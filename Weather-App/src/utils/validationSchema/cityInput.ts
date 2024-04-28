import * as Yup from "yup";

export const cityValidationSchema = Yup.object({
    city: Yup.string().required("City is required!")
  }).required();
  