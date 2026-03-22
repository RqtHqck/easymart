import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginActions } from '@/features/login';
import { selectLoginEmailSelector } from '@/features/login/model/selectors/selectLoginEmail/selectLoginEmail.ts';
import { selectLoginErrorSelector } from '@/features/login/model/selectors/selectLoginError/selectLoginError.ts';
import { selectLoginIsLoadingSelector } from '@/features/login/model/selectors/selectLoginIsLoading/selectLoginIsLoading.ts';
import { selectLoginMethodSelector } from '@/features/login/model/selectors/selectLoginMethod/selectLoginMethod.ts';
import { selectLoginPasswordSelector } from '@/features/login/model/selectors/selectLoginPassword/selectLoginPassword.ts';
import { selectLoginPhoneSelector } from '@/features/login/model/selectors/selectLoginPhone/selectLoginPhone.ts';
import 'react-international-phone/style.css';

import { login } from '@/features/login/model/services/login.ts';

import ArrowRight from '@/shared/assets/icons/ArrowRight.svg?react';
import Call from '@/shared/assets/icons/Call.svg?react';
import Sms from '@/shared/assets/icons/Sms.svg?react';
import { AuthMethods, routePaths } from '@/shared/config';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppIcon, Button, Input, PhoneInput, Tabs } from '@/shared/ui';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const email = useAppSelector(selectLoginEmailSelector);
  const phone = useAppSelector(selectLoginPhoneSelector);
  const password = useAppSelector(selectLoginPasswordSelector);
  const method = useAppSelector(selectLoginMethodSelector);
  const isLoading = useAppSelector(selectLoginIsLoadingSelector);
  const error = useAppSelector(selectLoginErrorSelector);

  const handleChangeEmail = (value: string) => {
    dispatch(loginActions.setEmail(value));
  };

  const handleChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const handleChangePhone = (value: string) => {
    dispatch(loginActions.setPhone(value));
  };

  const handleTabChange = () => {
    dispatch(
      loginActions.setMethod(
        method === AuthMethods.EMAIL ? AuthMethods.PHONE : AuthMethods.EMAIL,
      ),
    );
    dispatch(loginActions.resetForm());
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(login({ email, phone, password }));

    if (login.fulfilled.match(result)) {
      navigate(routePaths.home);
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Tabs onChange={handleTabChange} defaultValue={method}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethods.EMAIL}>
            <AppIcon Icon={Sms} /> Email
          </Tabs.Trigger>
          <Tabs.Trigger value={AuthMethods.PHONE}>
            <AppIcon Icon={Call} /> Phone
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethods.EMAIL}>
          <Input
            error={!!error}
            value={email}
            label={'Email'}
            onChange={handleChangeEmail}
            type="email"
            className={styles.input}
            placeholder="Enter your email"
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethods.PHONE}>
          <PhoneInput
            error={!!error}
            value={phone}
            label={'Phone'}
            onChange={handleChangePhone}
            className={styles.input}
            placeholder="Enter your phone"
          />
        </Tabs.Content>
      </Tabs>
      <Input
        value={password}
        label={'Password'}
        onChange={handleChangePassword}
        type="password"
        className={styles.input}
        placeholder="Enter your password"
      />
      {error && <div className={styles.error}>{error}</div>}
      <Button
        type="submit"
        className={styles.button}
        size="md"
        isLoading={isLoading}
        fullWidth={true}
      >
        Login <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
