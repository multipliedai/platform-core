import { motion } from "framer-motion";

const DEFAULT_MESSAGE =
  "You don't have permission to view this page. Only administrators can access this page.";

export interface AccessDeniedViewProps {
  /** Optional custom message below the "Access Denied" heading. */
  message?: string;
}

export function AccessDeniedView({
  message = DEFAULT_MESSAGE,
}: AccessDeniedViewProps) {
  return (
    <motion.main
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center py-16">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Access Denied
        </h1>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="h-32 w-32 mx-auto bg-red-100 rounded-full flex items-center justify-center">
          <svg
            className="h-16 w-16 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
      </div>
    </motion.main>
  );
}
