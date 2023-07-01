import axios from 'axios';
import queryString from 'query-string';
import { BudgetRequestInterface, BudgetRequestGetQueryInterface } from 'interfaces/budget-request';
import { GetQueryInterface } from '../../interfaces';

export const getBudgetRequests = async (query?: BudgetRequestGetQueryInterface) => {
  const response = await axios.get(`/api/budget-requests${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createBudgetRequest = async (budgetRequest: BudgetRequestInterface) => {
  const response = await axios.post('/api/budget-requests', budgetRequest);
  return response.data;
};

export const updateBudgetRequestById = async (id: string, budgetRequest: BudgetRequestInterface) => {
  const response = await axios.put(`/api/budget-requests/${id}`, budgetRequest);
  return response.data;
};

export const getBudgetRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/budget-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBudgetRequestById = async (id: string) => {
  const response = await axios.delete(`/api/budget-requests/${id}`);
  return response.data;
};
