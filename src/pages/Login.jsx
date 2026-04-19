import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { AlertCircle } from "lucide-react"; // Nice for error states

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Initialize React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        // data.username comes from the 'register' name
        login(data.username);
        navigate(from, { replace: true });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-8 animate-in fade-in zoom-in duration-500">
                
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/20">
                        <span className="text-2xl font-black text-white">TR</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Welcome Back</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Enter your details to access your trips</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Username Field */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                            Username
                        </label>
                        <input
                            {...register("username", { 
                                required: "Username is required",
                                minLength: { value: 3, message: "Min 3 characters" } 
                            })}
                            type="text"
                            className={`w-full px-4 py-3 rounded-xl border transition-all outline-none bg-transparent dark:text-white ${
                                errors.username 
                                ? "border-red-500 focus:ring-2 focus:ring-red-500/20" 
                                : "border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500"
                            }`}
                            placeholder="e.g. izhar_usmani"
                        />
                        {errors.username && (
                            <p className="flex items-center gap-1 mt-2 text-xs font-medium text-red-500 animate-in slide-in-from-top-1">
                                <AlertCircle size={14} /> {errors.username.message}
                            </p>
                        )}
                    </div>

                    {/* Password Field (Mock) */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                            Password
                        </label>
                        <input
                            {...register("password", { 
                                required: "Password is required",
                                minLength: { value: 6, message: "Min 6 characters" }
                            })}
                            type="password"
                            className={`w-full px-4 py-3 rounded-xl border transition-all outline-none bg-transparent dark:text-white ${
                                errors.password 
                                ? "border-red-500 focus:ring-2 focus:ring-red-500/20" 
                                : "border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500"
                            }`}
                            placeholder="••••••••"
                        />
                        {errors.password && (
                            <p className="flex items-center gap-1 mt-2 text-xs font-medium text-red-500 animate-in slide-in-from-top-1">
                                <AlertCircle size={14} /> {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all transform active:scale-[0.97] hover:shadow-blue-500/40"
                    >
                        Sign In
                    </button>
                </form>

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-100 dark:border-slate-800"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white dark:bg-slate-900 px-4 text-slate-400 font-medium tracking-widest">
                            Mock Auth
                        </span>
                    </div>
                </div>

                <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                    Don't have an account? <span className="text-blue-500 font-bold cursor-pointer hover:underline">Sign Up</span>
                </p>
            </div>
        </div>
    );
};

export default Login;