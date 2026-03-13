
// Azure Entra ID User Authentication Interface
export interface AzureEntraAuthUser {
  id: string; // Email as primary ID
  oid: string; // Azure Entra ID Object ID
  userName: string;
  accessToken: string;
  email: string;
  phoneNumber: string;
  idToken: string;
  refreshToken?: string;
  accessTokenExpirationDate?: string;
  givenName?: string;
  familyName?: string;
  name?: string;
}

// Azure Entra ID Token Claims
export interface AzureEntraClaims {
  sub: string;
  aud: string;
  iss: string;
  exp: number;
  iat: number;
  nbf: number;
  oid: string; // Azure Entra ID Object ID
  emails: string[];
  given_name?: string;
  family_name?: string;
  name?: string;
  preferred_username?: string;
  phone_number?: string;
  [key: string]: any;
}

// User Creation Data for Azure Entra ID
export interface CreateAzureEntraUserData {
  email: string;
  name: string;
  phoneNumber: string;
  attributes?: Record<string, string>;
  sendEmail?: boolean;
  profileDetails?: Record<string, any>;
}

// Azure Entra ID User Response
export interface AzureEntraUser {
  id: string;
  emails: string[];
  displayName: string;
  mobilePhone?: string;
  attributes?: Record<string, any>;
}