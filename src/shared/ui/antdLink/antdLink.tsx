import { Typography } from 'antd';
import { AntdLinkConfigProvider } from './antdLink.providers';
import type { AntdLinkProps } from './antdLink.types';

export const AntdLink = ({ children, ...props }: AntdLinkProps) => {
  return (
    <AntdLinkConfigProvider>
      <Typography.Link {...props}>{children}</Typography.Link>
    </AntdLinkConfigProvider>
  );
};
