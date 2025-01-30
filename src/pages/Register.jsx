import Button from "../component/button";

const Register = () => {
    return (
        <>
            <div className="flex justify-center min-h-screen items-center flex-col">
                <div className="w-full max-w-xs mb-3">
                    <h1 className="font-bold text-3xl mb-2 text-sky-500">Register</h1>
                    <p className="font-medium text-slate-500 mb-8">welcome, please enter your details</p>
                    <form action="" className="mb-8">
                        <div className="mb-3">
                            <label htmlFor="email" className="block font-semibold">Full Name</label>
                            <input type="text" placeholder="insert your name here" className="text-sm border rounded w-full py-2 px-3 text-slate-900 placeholder: opacity-50" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="block font-semibold">Email</label>
                            <input type="email" placeholder="example@gmail.com" className="text-sm border rounded w-full py-2 px-3 text-slate-900 placeholder: opacity-50" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="block font-semibold">Password</label>
                            <input type="password" placeholder="*********" className="text-sm border rounded w-full py-2 px-3 text-slate-900 placeholder: opacity-50" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="block font-semibold">Confirm Password</label>
                            <input type="password" placeholder="********" className="text-sm border rounded w-full py-2 px-3 text-slate-900 placeholder: opacity-50" />
                        </div>
                    </form>
                    <Button title="Sign Up" />
                </div>
                <div>
                    <p>Have an account ? <a href="/" className="text-sky-600 hover:text-sky-900">Sign in</a></p>
                </div>
            </div>

        </>
    )
}

export default Register;