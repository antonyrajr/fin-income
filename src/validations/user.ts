import { object, string } from "yup";
import ErroreHandler from "../Routes/ErrorHandler";

const createUserValidation = object().shape({
  slug_id: string().required("Slug Id is required"),
  email: string().required("Email is required").email(),
});

class UserValidation {
  static async createUser(user: any) {
    try {
      await createUserValidation.validate(user, {
        abortEarly: false,
      });
      return true;
    } catch (error) {
      // @ts-ignore
      ErroreHandler.validationError(error?.errors);
    }
  }
}

export default UserValidation;
