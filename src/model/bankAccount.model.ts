import { alias, serializable, object } from "serializr"
import Document from "./document.model";

class BankAccount {
    @serializable(alias("bank_account_document_details", object(Document)))
    bankAccountDocumentDetails?: Document;
}

export default BankAccount