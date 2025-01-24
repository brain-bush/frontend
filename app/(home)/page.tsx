'use client';

import { actions, selectors } from '@/entities/auth';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { Button, Flex, Typography } from 'antd';
import { useCallback } from 'react';

const { Paragraph } = Typography;

export default function HomePage() {
  const user = useAppSelector(selectors.getUser);
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(actions.logout());
  }, [dispatch]);

  return (
    <Flex gap={10} justify="center" align="center">
      <Paragraph
        style={{
          margin: 0,
        }}>
        Привет, {user?.nickname}!
      </Paragraph>
      <Button type="primary" onClick={handleLogout}>
        Выйти
      </Button>
    </Flex>
  );
}
