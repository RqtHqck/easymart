import type { FormEvent } from 'react';

import { registerActions } from '@/features/register';
import { selectRegisterEmailSelector } from '@/features/register/model/selectors/selectRegisterEmail/selectRegisterEmail.ts';
import { selectRegisterErrorSelector } from '@/features/register/model/selectors/selectRegisterError/selectRegisterError.ts';
import { selectRegisterIsLoadingSelector } from '@/features/register/model/selectors/selectRegisterIsLoading/selectRegisterIsLoading.ts';
import { selectRegisterMethodSelector } from '@/features/register/model/selectors/selectRegisterMethod/selectRegisterMethod.ts';
import { selectRegisterPhoneSelector } from '@/features/register/model/selectors/selectRegisterPhone/selectRegisterPhone.ts';
import { FormSteps } from '@/features/register/model/types/registerForm.ts';

import ArrowRight from '@/shared/assets/icons/ArrowRight.svg?react';
import Call from '@/shared/assets/icons/Call.svg?react';
import Sms from '@/shared/assets/icons/Sms.svg?react';
import { AuthMethods } from '@/shared/config';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppIcon, Button, Input, PhoneInput, Tabs } from '@/shared/ui';

import styles from './CredentialsStep.module.scss';

export const CredentialsStep = () => {
  const dispatch = useAppDispatch();

  const email = useAppSelector(selectRegisterEmailSelector);
  const phone = useAppSelector(selectRegisterPhoneSelector);
  const error = useAppSelector(selectRegisterErrorSelector);
  const method = useAppSelector(selectRegisterMethodSelector);
  const isLoading = useAppSelector(selectRegisterIsLoadingSelector);

  const handleChangeEmail = (value: string) => {
    dispatch(registerActions.setEmail(value));
  };

  const handleChangePhone = (value: string) => {
    dispatch(registerActions.setPhone(value));
  };

  const handleTabChange = () => {
    dispatch(
      registerActions.setMethod(
        method === AuthMethods.EMAIL ? AuthMethods.PHONE : AuthMethods.EMAIL,
      ),
    );
    dispatch(registerActions.resetForm());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerActions.setStep(FormSteps.PASSWORD));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Tabs onChange={handleTabChange} defaultValue={method}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethods.EMAIL}>
            <AppIcon Icon={Sms} /> Email
          </Tabs.Trigger>
          <Tabs.Trigger value={AuthMethods.PHONE}>
            <AppIcon Icon={Call} />
            Phone
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethods.EMAIL}>
          <Input
            disabled={isLoading}
            error={!!error}
            label="Email"
            type="email"
            onChange={handleChangeEmail}
            value={email}
            placeholder="Enter email"
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethods.PHONE}>
          <PhoneInput
            disabled={isLoading}
            error={!!error}
            label="Phone"
            onChange={handleChangePhone}
            value={phone}
            placeholder="Enter phone number"
          />
        </Tabs.Content>
        {error && <div className={styles.error}>{error}</div>}
        <Button isLoading={isLoading} type={'submit'} fullWidth size={'md'}>
          Continue
          <AppIcon Icon={ArrowRight} />
        </Button>
      </Tabs>
    </form>
  );
};
