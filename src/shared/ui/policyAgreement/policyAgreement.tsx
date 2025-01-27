'use client';

import type { PolicyAgreementProps } from './policyAgreement.types';
import { ROUTER_PATHS } from '../../constants';
import { Typography } from 'antd';
import { AntdLink } from '../antdLink';
import { CONTEXT_WORD } from './policyAgreement.constants';
import Link from 'next/link';
import styles from './policyAgreement.module.scss';

const { Paragraph } = Typography;

export const PolicyAgreement = ({
  context = 'login',
}: PolicyAgreementProps) => {
  return (
    <Paragraph className={styles.policyText}>
      При&nbsp;{CONTEXT_WORD[context]}&nbsp;Вы автоматически соглашаетесь
      с&nbsp;
      <Link href={ROUTER_PATHS.LOGIN} legacyBehavior passHref>
        <AntdLink className={styles.policyLink}>условиями</AntdLink>
      </Link>
      &nbsp;пользовательского соглашения.
    </Paragraph>
  );
};
