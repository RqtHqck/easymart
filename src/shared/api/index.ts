import { extractErrorMessage } from '@/shared/api/axios/extraErrorMessages.ts';
import {
  httpClient,
  setAuthFailureHandler,
} from '@/shared/api/axios/httpClient.ts';

export { httpClient, setAuthFailureHandler, extractErrorMessage };
