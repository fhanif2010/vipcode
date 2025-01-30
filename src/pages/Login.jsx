import Button from "../component/button";
import InputLabel from "../component/sign/Index"

const Login = () => {
    return (
        <>
            <div className="flex justify-center min-h-screen items-center flex-col">
                <div className="w-full max-w-xs mb-3">
                    <h1 className="font-bold text-3xl mb-2 text-sky-500">Login</h1>
                    <p className="font-medium text-slate-500 mb-8">welcome, please enter your details</p>
                    <form action="" className="mb-8">
                        <InputLabel />
                        <InputLabel />
                    </form>
                    <Button title="Login" />
                </div>
                <div>
                    <p>Don`t have an account ? <a href="/register" className="text-sky-600 hover:text-sky-900">Sign Up</a></p>
                </div>
            </div>
        </>
    )
}

export default Login;