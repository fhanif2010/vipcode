const Button = (props) => {
    return (
        <>
            <button className="bg-sky-500 hover:bg-sky-700 p-3 w-full rounded-lg text-white font-semibold hover:pointer ">{props.title}</button>
        </>
    )
}

export default Button;