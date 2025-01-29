import Button from "./button/button"

function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="font-bold text-3xl mb-2 text-sky-400">Login</h1>
          <p className="font-medium text-slate-500 mb-8">welcome, please enter your details</p>
          <form action="">
            <div className="mb-3">
              <label htmlFor="email" className="block">Email</label>
              <input type="email" placeholder="example@gmail.com" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block">Password</label>
              <input type="password" placeholder="*****" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" />
            </div>
            <Button title={"Login"} bg={"bg-red-200"}/>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
