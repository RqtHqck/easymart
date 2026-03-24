import { selectRegisterStepSelector } from '@/features/register/model/selectors/selectRegisterStep/selectRegisterStep.ts';
import { FormSteps } from '@/features/register/model/types/registerForm.ts';
import { CreatePasswordStep } from '@/features/register/ui/steps/CreatePasswordStep/CreatePasswordStep.tsx';
import { CredentialsStep } from '@/features/register/ui/steps/CredentialsStep/CredentialsStep.tsx';
import { VerificationStep } from '@/features/register/ui/steps/VerificationStep/VerificationStep.tsx';

import { useAppSelector } from '@/shared/lib';

export const RegisterForm = () => {
  const step = useAppSelector(selectRegisterStepSelector);

  return (
    <>
      {step === FormSteps.CREDENTIALS && <CredentialsStep />}
      {step === FormSteps.PASSWORD && <CreatePasswordStep />}
      {step === FormSteps.VERIFICATION && <VerificationStep />}
    </>
  );
};
