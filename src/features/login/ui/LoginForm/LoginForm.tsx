import type { FormEvent } from 'react';

import { AuthMethods } from '@/shared/config';
import { Button, Input, Tabs } from '@/shared/ui';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Tabs defaultValue={AuthMethods.EMAIL}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethods.EMAIL}>Email</Tabs.Trigger>
          <Tabs.Trigger value={AuthMethods.PHONE}>Phone</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethods.EMAIL}>
          <label className={styles.label} htmlFor="">
            Email
          </label>
          <Input
            type="email"
            className={styles.input}
            placeholder="Enter your email"
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethods.PHONE}>
          <label className={styles.label} htmlFor="">
            Phone
          </label>
          <Input className={styles.input} placeholder="Enter your phone" />
        </Tabs.Content>
      </Tabs>
      <label className={styles.label} htmlFor="">
        Password
      </label>

      <Input
        type="password"
        className={styles.input}
        placeholder="Enter your password"
      />
      <Button
        type="submit"
        className={styles.button}
        size="md"
        fullWidth={true}
      >
        Login
      </Button>
    </form>
  );
};
