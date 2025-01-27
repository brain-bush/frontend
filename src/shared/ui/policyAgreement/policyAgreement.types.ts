import type { CONTEXT_WORD } from './policyAgreement.constants';

export type PolicyAgreementProps = {
  context: keyof typeof CONTEXT_WORD;
};
