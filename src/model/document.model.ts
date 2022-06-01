import { primitive, serializable } from "serializr";

class Document {
    @serializable(primitive())
    title?: string;

    @serializable(primitive())
    group?: string;
}

export default Document;