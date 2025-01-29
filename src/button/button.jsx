const Button = (props) => {
    return (
        <>
            <button className={`${props.bg} hover:bg-sky-700 p-3 rounded-lg text-white font-semibold w`}>{props.title}</button>
        </>
    )
}

export default Button;