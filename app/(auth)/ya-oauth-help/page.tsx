'use client';

import { useOauthLogin, useYaOauthToken } from '@/entities/auth';

export default function YaOauthHelpPage() {
  const oauthToken = useYaOauthToken();

  useOauthLogin(oauthToken);

  return null;
}
