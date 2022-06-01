import { alias, serializable, object } from "serializr"
import Document from "./document.model";

class DematAccount {
    @serializable(alias("demat_account_document_details", object(Document)))
    dematAccountDocumentDetails?: Document;
}

export default DematAccount