import { YA_OAUTH_URL } from '@/entities/auth';
import Link from 'next/link';

export default function LoginPage() {
  return <Link href={YA_OAUTH_URL}>Войти</Link>;
}
