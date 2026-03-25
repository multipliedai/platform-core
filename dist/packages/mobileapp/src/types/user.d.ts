export interface AzureEntraAuthUser {
    id: string;
    oid: string;
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
export interface AzureEntraClaims {
    sub: string;
    aud: string;
    iss: string;
    exp: number;
    iat: number;
    nbf: number;
    oid: string;
    emails: string[];
    given_name?: string;
    family_name?: string;
    name?: string;
    preferred_username?: string;
    phone_number?: string;
    [key: string]: any;
}
export interface CreateAzureEntraUserData {
    email: string;
    name: string;
    phoneNumber: string;
    attributes?: Record<string, string>;
    sendEmail?: boolean;
    profileDetails?: Record<string, any>;
}
export interface AzureEntraUser {
    id: string;
    emails: string[];
    displayName: string;
    mobilePhone?: string;
    attributes?: Record<string, any>;
}
//# sourceMappingURL=user.d.ts.map