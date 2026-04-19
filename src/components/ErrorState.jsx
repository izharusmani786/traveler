import { AlertCircle, RefreshCw } from "lucide-react";
const ErrorState = ({ message, onRetry }) => (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-3xl text-center">
        <AlertCircle className="text-red-500 mb-3" size={32} />
        <p className="text-red-900 dark:text-red-400 font-medium mb-4">{message}</p>
        <button 
            onClick={onRetry}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl hover:bg-red-200 transition-colors"
        >
            <RefreshCw size={16} /> Retry
        </button>
    </div>
);

export default ErrorState