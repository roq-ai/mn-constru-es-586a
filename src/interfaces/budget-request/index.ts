import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface BudgetRequestInterface {
  id?: string;
  client_id?: string;
  organization_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface BudgetRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  client_id?: string;
  organization_id?: string;
  status?: string;
}
