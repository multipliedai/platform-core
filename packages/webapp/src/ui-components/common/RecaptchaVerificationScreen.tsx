import React from 'react';
import { Recaptcha } from './Recaptcha';

interface RecaptchaVerificationScreenProps {
  siteKey: string;
  onVerify: (token: string | null) => void;
  onExpire: () => void;
  onError: () => void;
  error?: string | null;
  title?: string;
  description?: string;
}

export const RecaptchaVerificationScreen: React.FC<RecaptchaVerificationScreenProps> = ({
  siteKey,
  onVerify,
  onExpire,
  onError,
  error,
  title = "Verify You're Human",
  description = "Please complete the reCAPTCHA verification to view this content.",
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center gap-6 p-6 max-w-md">
        <h2 className="font-poppins text-2xl font-semibold text-gray-900 text-center">
          {title}
        </h2>
        <p className="text-gray-600 text-sm text-center">
          {description}
        </p>
        <Recaptcha
          siteKey={siteKey}
          onVerify={onVerify}
          onExpire={onExpire}
          onError={onError}
          theme="light"
          size="normal"
          className="flex justify-center"
        />
        {error && (
          <p className="text-red-600 text-sm text-center mt-2">{error}</p>
        )}
      </div>
    </div>
  );
};

