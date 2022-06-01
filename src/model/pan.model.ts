import { alias, primitive, serializable, object } from "serializr"
import Document from "./document.model";

class Pan {
    @serializable(alias("pan_number", primitive()))
    panNumber?: string;

    @serializable(alias("pan_document_details", object(Document)))
    panDocumentDetails?: Document;
}

export default Pan