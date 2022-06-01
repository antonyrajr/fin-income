import fs from "fs";
import { readFile } from "fs/promises";
import path from "path";

const schema = async () => {
  try {
    const schemaArray = [];
    const schemaPath = path.join("src", "graphql", "schema");
    const files = await fs.readdirSync(schemaPath);

    for (let file of files) {
      if (!file?.includes("index")) {
        const content = await readFile(path.join(schemaPath, file), "utf-8");
        schemaArray.push(content);
      }
    }
    return schemaArray;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default schema;