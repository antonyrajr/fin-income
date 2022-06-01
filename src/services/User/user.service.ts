import axiosInstance from "../../interceptor";
import ApiRoutes from "../../Routes/apiRoutes";

class UserService {
  static createUser = async (user: any) => {
    try {
      const { data } = await axiosInstance.post(ApiRoutes.CREATE_USER, user, {
        headers: {
          "current-entity-id": "628785a4506171003a856c00",
          "current-group": "customer",
          "current-sub-group": "anchor",
        },
      });
      // console.log({ data });
    } catch (error) {}
  };

  static VerifyOtp = async (otp: string, entityId: string) => {
    try {
      const URL = ApiRoutes.OTP_VERIFICATION.replace(":entityId", entityId);
      const params = {
        product_id: "CRA",
        otp,
      };
      const { data } = await axiosInstance.get(URL, {
        params,
        headers: {
          // "current-entity-id": "628785a4506171003a856c00",
          // "current-group": "customer",
          // "current-sub-group": "anchor",
        },
      });
      console.log(data);
    } catch (error) {
      throw error;
    }
  };

  static updatePassword = async (entityId: string, user: any) => {
    try {
      const URL = ApiRoutes.UPDATE_PASSWORD.replace(":entityId", entityId);
      const {} = await axiosInstance.get(URL, user);
      return true;
    } catch (error) {
      throw error;
    }
  };
}

export default UserService;
