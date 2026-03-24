import { useNavigate } from 'react-router-dom';

import { selectRegisterEmailSelector } from '@/features/register/model/selectors/selectRegisterEmail/selectRegisterEmail.ts';
import { selectRegisterErrorSelector } from '@/features/register/model/selectors/selectRegisterError/selectRegisterError.ts';
import { selectRegisterIsLoadingSelector } from '@/features/register/model/selectors/selectRegisterIsLoading/selectRegisterIsLoading.ts';
import { selectRegisterPhoneSelector } from '@/features/register/model/selectors/selectRegisterPhone/selectRegisterPhone.ts';
import { resendCode } from '@/features/register/model/services/resendCode.ts';
import { verifyCode } from '@/features/register/model/services/verifyCode.ts';

import { routePaths } from '@/shared/config';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Button, OTPInput, Spinner } from '@/shared/ui';

import styles from './VerificationStep.module.scss';

export const VerificationStep = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const email = useAppSelector(selectRegisterEmailSelector);
  const phone = useAppSelector(selectRegisterPhoneSelector);
  const error = useAppSelector(selectRegisterErrorSelector);
  const isLoading = useAppSelector(selectRegisterIsLoadingSelector);

  const onSubmit = async (code: string) => {
    const result = await dispatch(verifyCode({ email, phone, code }));
    if (verifyCode.fulfilled.match(result)) {
      navigate(routePaths.home);
    }
  };

  const handleResend = () => {
    dispatch(resendCode({ email, phone }));
  };

  return (
    <>
      <form className={styles.form}>
        <div className={styles.title}>
          Sent to <br />
          <span>{email || phone}</span>
        </div>
        <OTPInput disabled={isLoading} error={!!error} onComplete={onSubmit} />
        {error && <div className={styles.error}>{error}</div>}
        {isLoading && (
          <div className={styles.wrapper}>
            <Spinner size="md" />
          </div>
        )}
      </form>
      <div className={styles.resendCodeText}>
        <span>Code not received?</span>
        <Button
          onClick={handleResend}
          disabled={isLoading}
          className={styles.resendCodeButton}
          theme="ghost"
        >
          Resend
        </Button>
      </div>
    </>
  );
};
