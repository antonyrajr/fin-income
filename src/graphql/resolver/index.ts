import { userQuery, userMutation } from "./user";

const resolver = {
  Query: {
    ...userQuery,
  },
  Mutation: {
    ...userMutation,
  },
};

export default resolver;