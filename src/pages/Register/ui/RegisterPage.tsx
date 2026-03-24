import { Link } from 'react-router-dom';

import {
  FormSteps,
  type FormStepsType,
  registerActions,
  selectRegisterStepSelector,
} from '@/features/register';
import { RegisterForm } from '@/features/register/ui/RegisterForm.tsx';

import ArrowLeftIcon from '@/shared/assets/icons/ArrowLeft.svg?react';
import { routePaths } from '@/shared/config';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppIcon, Button } from '@/shared/ui';

import styles from './RegisterPage.module.scss';

const STEP_TITLES: Record<FormStepsType, string> = {
  [FormSteps.CREDENTIALS]: 'Sing Up',
  [FormSteps.PASSWORD]: 'Create Password',
  [FormSteps.VERIFICATION]: 'Verification',
};

export const RegisterPage = () => {
  const step = useAppSelector(selectRegisterStepSelector);
  const dispatch = useAppDispatch();

  const handleGoBackClick = () => {
    dispatch(registerActions.resetForm());
    dispatch(registerActions.setStep(FormSteps.CREDENTIALS));
  };

  const isCredentialsStep = step === FormSteps.CREDENTIALS;

  const title = step ? STEP_TITLES[step] : STEP_TITLES[FormSteps.CREDENTIALS];

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {!isCredentialsStep && (
          <Button
            onClick={handleGoBackClick}
            theme={'tertiary'}
            size={'md'}
            form={'circle'}
          >
            <AppIcon Icon={ArrowLeftIcon} />
          </Button>
        )}
        <h1 className={styles.title}>{title}</h1>
        <RegisterForm />
        {isCredentialsStep && (
          <>
            <div className={styles.divider}>
              <div className={styles.line} />
              <span className={styles.dividerText}>or</span>
              <div className={styles.line} />
            </div>
            <div className={styles.authServices}>
              <Button size={'md'} fullWidth>
                Auth by google
              </Button>
            </div>
            <span className={styles.footer}>
              Already have an account?{' '}
              <Link className={styles.link} to={routePaths.login}>
                Sign in
              </Link>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
