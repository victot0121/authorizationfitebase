import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null); // State for error message
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            navigate('/home');
        } catch (error: any) {
            if (error.code === 'auth/wrong-password') {
                setError('Incorrect password.');
            } else if (error.code === 'auth/user-not-found') {
                setError('No user found with this email.');
            } else {
                setError('Failed to sign in');
            }
            console.log('Failed to sign in', error);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                <Link to="/signup" className="text-secondColor-orangeDark">I don't have an account</Link>
                            </label>
                        </div>
                        {error && <div className="text-red-500 mt-2">{error}</div>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Login</button>
                            <button>

                            </button>
                        </div>


                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-secondColor-orangeDark">Log In Now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link to="/firstpage" className="text-secondColor-orangeDark">Back to Landing Page</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
