import { primitive, alias, serializable, object } from "serializr";
import BankAccount from "./bankAccount.model";
import DematAccount from "./dematAccount.model";
import Pan from "./pan.model";

class Entity {
  @serializable(primitive())
  id?: string;

  @serializable(primitive())
  email?: string;

  @serializable(primitive())
  state?: string;

  @serializable(primitive())
  name?: string;

  @serializable(primitive())
  mobile?: string;

  @serializable(alias("slug_id", primitive()))
  slugId?: string = "";

  @serializable(alias("entity_id", primitive()))
  entityId?: string = "";

  @serializable(alias("campaign_code", primitive()))
  campaignCode?: string = "";

  @serializable(primitive())
  category?: string;

  @serializable(alias("company_name", primitive()))
  companyName?: string = "";

  @serializable(alias("invite_link", primitive()))
  inviteLink?: string = "";

  @serializable(primitive())
  status?: string;

  @serializable(alias("retail_user_present", primitive()))
  retailUserPresent?: boolean = false;

  @serializable(primitive())
  verified?: boolean = false;

  @serializable(alias("accept_terms", primitive()))
  acceptTerms?: boolean = false;

  @serializable(alias("create_entity", primitive()))
  createEntity?: boolean = true;

  @serializable(alias("pan_details", object(Pan)))
  panDetails?: Pan;

  @serializable(alias("bank_account_details", object(BankAccount)))
  bankAccountDetails?: BankAccount;

  @serializable(alias("demat_account_details", object(DematAccount)))
  dematAccountDetails?: DematAccount;
}

export default Entity;
