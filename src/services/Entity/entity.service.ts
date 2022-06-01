import { serialize } from "serializr";
import axiosInstance from "../../interceptor";
import Entity from "../../model/entity.model";
import ApiRoutes from "../../Routes/apiRoutes";
import ErroreHandler from "../../Routes/ErrorHandler";

class EntityService {
  static createEntity = async (entity: Entity) => {
    try {
      const { data } = await axiosInstance.post(
        ApiRoutes.CREATE_ENTITY,
        entity
      );
      // User conflict
      if (data?.status === "retail_user_exist") {
        ErroreHandler.ConflictError({
          message: "User arealy exist",
        });
      }

      return data;
    } catch (error) {
      throw error;
    }
  };

  static CheckEntity = async (entity_id: string) => {
    try {
      const params = {
        entity_id,
      }
      const { data } = await axiosInstance.get(ApiRoutes.CHECK_ENTITY, {
        params
      });

      if (data?.entity_creation_status === "true") {
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  };
}

export default EntityService;
