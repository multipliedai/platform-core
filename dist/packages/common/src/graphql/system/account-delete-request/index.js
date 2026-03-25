"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REQUEST_ACCOUNT_DELETION = void 0;
const client_1 = require("@apollo/client");
exports.REQUEST_ACCOUNT_DELETION = (0, client_1.gql) `
  mutation RequestAccountDeletion($name: String!, $email: String!, $recaptchaToken: String!, $reason: String) {
    requestAccountDeletion(name: $name, email: $email, recaptchaToken: $recaptchaToken, reason: $reason)
  }
`;
//# sourceMappingURL=index.js.map