import { ApolloServer as Server } from "apollo-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { constraintDirectiveTypeDefs, constraintDirective } from "graphql-constraint-directive";
import schema from "../../graphql/schema";
import resolvers from "../../graphql/resolver";
import { env } from "../../env";
import ErroreHandler from "../../Routes/ErrorHandler";
import { logger } from "./logger";
import mocks from "../../mocks";
import ConstraintDirective from 'graphql-constraint-directive';

const ApolloServer = async () => {
  try {
    let typeDefs = makeExecutableSchema({
      typeDefs: [constraintDirectiveTypeDefs, ...(await schema())],
    });
    typeDefs = constraintDirective()(typeDefs);
    // Apollo server configurations
    const options = {
      typeDefs,
      resolvers,
      debug: Boolean(env.DEBUG),
      // mocks,
      formatError: ErroreHandler.formatError,
      csrfPrevention: true,
    };
    const server = new Server(options);
    return server;
  } catch (error) {
    throw error;
  }
};

export default ApolloServer;
