import React, { useRef, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface RecaptchaProps {
  siteKey: string;
  onVerify: (token: string | null) => void;
  onExpire?: () => void;
  onError?: () => void;
  theme?: 'light' | 'dark';
  size?: 'normal' | 'compact';
  className?: string;
}

export const Recaptcha: React.FC<RecaptchaProps> = ({
  siteKey,
  onVerify,
  onExpire,
  onError,
  theme = 'light',
  size = 'normal',
  className = '',
}) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if reCAPTCHA script is loaded
    const checkScript = () => {
      if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
        setIsLoaded(true);
      } else {
        setTimeout(checkScript, 100);
      }
    };
    checkScript();
  }, []);

  const handleChange = (token: string | null) => {
    onVerify(token);
  };

  const handleExpired = () => {
    if (onExpire) {
      onExpire();
    }
    // Reset the reCAPTCHA
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const handleError = () => {
    if (onError) {
      onError();
    }
  };

  if (!siteKey) {
    console.warn('reCAPTCHA site key is not configured');
    return null;
  }

  return (
    <div className={`recaptcha-wrapper ${className}`}>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={handleChange}
        onExpired={handleExpired}
        onError={handleError}
        theme={theme}
        size={size}
      />
    </div>
  );
};

