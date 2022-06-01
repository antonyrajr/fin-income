import ApolloServer from "./config/apollo";
import ErroreHandler from "./Routes/ErrorHandler";

(async () => {
  try {
    const server = await ApolloServer();
    const { url } = await server.listen(5500);
    console.log(`server running in ${url}`);
  } catch (error) {
    console.log({error});
    //@ts-ignore
    // ErroreHandler.InternalServerProblem(error?.message);
  }
})();