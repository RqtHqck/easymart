import { type FormEvent, useState } from 'react';

import { registerActions } from '@/features/register';
import { passwordRequirements } from '@/features/register/config/passwordRequirements.ts';
import { selectRegisterEmailSelector } from '@/features/register/model/selectors/selectRegisterEmail/selectRegisterEmail.ts';
import { selectRegisterIsLoadingSelector } from '@/features/register/model/selectors/selectRegisterIsLoading/selectRegisterIsLoading.ts';
import { selectRegisterPasswordSelector } from '@/features/register/model/selectors/selectRegisterPassword/selectRegisterPassword.ts';
import { selectRegisterPhoneSelector } from '@/features/register/model/selectors/selectRegisterPhone/selectRegisterPhone.ts';
import { register } from '@/features/register/model/services/register.ts';

import ArrowRight from '@/shared/assets/icons/ArrowRight.svg?react';
import CheckIcon from '@/shared/assets/icons/Check.svg?react';
import { cn, useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppIcon, Button, Input } from '@/shared/ui';

import styles from './CreatePasswordStep.module.scss';

export const CreatePasswordStep = () => {
  const dispatch = useAppDispatch();
  const [validationError, setValidationError] = useState<boolean>(false);

  const email = useAppSelector(selectRegisterEmailSelector);
  const phone = useAppSelector(selectRegisterPhoneSelector);
  const password = useAppSelector(selectRegisterPasswordSelector);
  const isLoading = useAppSelector(selectRegisterIsLoadingSelector);

  const handleChangePassword = (value: string) => {
    dispatch(registerActions.setPassword(value));

    const isValid = passwordRequirements.every((requirement) =>
      requirement.test(value),
    );

    if (!isValid) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validationError) {
      dispatch(register({ email, phone, password }));
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          disabled={isLoading}
          onChange={handleChangePassword}
          error={!!validationError}
          label="Password"
          type="password"
          value={password}
          placeholder="Enter password"
        />
        <div className={styles.requirementsList}>
          {passwordRequirements.map((requirement) => {
            const isMet = requirement.test(password);
            return (
              <div key={requirement.key} className={styles.requirement}>
                <AppIcon
                  size={16}
                  className={cn(styles.requirementIcon, {
                    [styles.met]: isMet,
                  })}
                  Icon={CheckIcon}
                />
                <span className={styles.requirementText}>
                  {requirement.key}
                </span>
              </div>
            );
          })}
        </div>
        <Button
          type="submit"
          className={styles.button}
          disabled={validationError}
          isLoading={isLoading}
          size="md"
          fullWidth
        >
          Continue <AppIcon Icon={ArrowRight} />
        </Button>
      </form>
    </>
  );
};
