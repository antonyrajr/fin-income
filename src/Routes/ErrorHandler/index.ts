import { ApolloError } from "apollo-server";
import { env } from "../../env";
import STATUS_CODE from "../StatusCode";

type ErrorType = string | Object | any[];

interface ErrorResponse {
  message: string;
  status_code: string;
  errors: string[];
  exception?: string[];
}

const parseStatusCode = (code: string) => {
  switch (code) {
    case "GRAPHQL_VALIDATION_FAILED":
      return STATUS_CODE.NOT_FOUND;
    case "GRAPHQL_PARSE_FAILED":
      return STATUS_CODE.BAD_REQUEST;
    case "BAD_USER_INPUT":
      return STATUS_CODE.BAD_REQUEST;
    case "INTERNAL_SERVER_ERROR":
      return STATUS_CODE.INTERNAL_SERVER_ERROR;
    default:
      return code;
  }
};

const parseError = (errors: string | Object) => {
  if (typeof errors === "string") {
    return [errors];
  }
  if (Array.isArray(errors)) {
    return errors;
  }
  return Object.values(errors);
};

class ErroreHandler {
  static formatError(error: any) {
    try {
      const { message } = error;
      const { code, errors, exception } = error.extensions;
      const statusCode = parseStatusCode(code);
      const errorResponse: ErrorResponse = {
        message,
        status_code: statusCode,
        errors: parseError(errors ?? ""),
      };
      if (env.DEBUG && exception) {
        errorResponse["exception"] = exception;
      }
      return errorResponse;
    } catch (error) {
      throw error;
    }
  }

  static BadRequest(errors: ErrorType) {
    throw new ApolloError("Bad Request", STATUS_CODE.BAD_REQUEST, {
      errors: parseError(errors),
    });
  }

  static noContent(errors: ErrorType) {
    throw new ApolloError("No Content", STATUS_CODE.NO_CONTENT, {
      errors: parseError(errors),
    });
  }

  static validationError(errors: ErrorType) {
    throw new ApolloError("Validation Error", STATUS_CODE.BAD_REQUEST, {
      errors: parseError(errors),
    });
  }

  static unAuthorizedError(errors: ErrorType) {
    throw new ApolloError("UnAuthorized", STATUS_CODE.UNAUTHORIZED, {
      errors: parseError(errors),
    });
  }

  static ConflictError(errors: ErrorType) {
    throw new ApolloError("Conflict", STATUS_CODE.CONFLICT, {
      errors: parseError(errors),
    });
  }

  static notFoundError(errors: ErrorType) {
    throw new ApolloError("Route not found", STATUS_CODE.NOT_FOUND, {
      errors: parseError(errors),
    });
  }

  static InternalServerProblem(errors: ErrorType) {
    throw new ApolloError(
      "Internal server problem",
      STATUS_CODE.INTERNAL_SERVER_ERROR,
      {
        errors: parseError(errors),
      }
    );
  }
}

export default ErroreHandler;
