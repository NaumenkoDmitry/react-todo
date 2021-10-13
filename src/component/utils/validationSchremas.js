import * as yup from "yup"

export const TODO_SCHEMA = yup.object({
  body:yup.string()
});