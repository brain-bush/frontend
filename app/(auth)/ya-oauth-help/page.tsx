'use client';

import { useOauthLogin, useYaOauthToken } from '@/entities/auth';

export default function YaOauthHelpPage() {
  const token = useYaOauthToken();

  useOauthLogin(token);

  return <div>test</div>;
}
