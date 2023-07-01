const mapping: Record<string, string> = {
  'budget-requests': 'budget_request',
  invitations: 'invitation',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
