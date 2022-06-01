import { env } from "../env";

const ApiRoutes = {
  BASE_URL: env.API_URL,
  CREATE_ENTITY: "/retail_user",
  CHECK_ENTITY: "/retail_user/check_entity_created_poller",
  CREATE_USER: "/retail_user",
  OTP_VERIFICATION: "/users/:entityId/otp_soft_verify",
  UPDATE_PASSWORD: "/users/:entityId/otp_signup",
  TOKEN: "/token",
};

export default ApiRoutes;
