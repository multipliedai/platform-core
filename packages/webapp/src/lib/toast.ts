import { toast as sonnerToast } from 'sonner';

// Custom toast utility with predefined styles
export const toast = {
  success: (message: string, options?: any) => {
    return sonnerToast.success(message, {
      style: {
        background: '#dcfce7',
        color: '#166534',
        border: '1px solid #bbf7d0',
      },
      ...options,
    });
  },

  error: (message: string, options?: any) => {
    return sonnerToast.error(message, {
      style: {
        background: '#fee2e2',
        color: '#dc2626',
        border: '1px solid #fecaca',
      },
      ...options,
    });
  },

  warning: (message: string, options?: any) => {
    return sonnerToast.warning(message, {
      style: {
        background: '#fef3c7',
        color: '#92400e',
        border: '1px solid #fde68a',
      },
      ...options,
    });
  },

  info: (message: string, options?: any) => {
    return sonnerToast.info(message, {
      style: {
        background: '#dbeafe',
        color: '#1e40af',
        border: '1px solid #bfdbfe',
      },
      ...options,
    });
  },

  // Default toast (no specific type)
  default: (message: string, options?: any) => {
    return sonnerToast(message, options);
  },
};
