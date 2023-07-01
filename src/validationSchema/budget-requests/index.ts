import * as yup from 'yup';

export const budgetRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  client_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
