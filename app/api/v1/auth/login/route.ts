import type { AuthUser } from '@/entities/auth';
import { faker } from '@faker-js/faker';

export const POST = () => {
  const authUser: AuthUser = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    nickname: faker.internet.displayName(),
    avatar: faker.image.avatar(),
  };

  return Response.json(authUser);
};
