const Input = (props) => {
    return (
        <>
            <input type={props.type} placeholder={props.placeholder} id={props.name} 
            className="text-sm border rounded w-full py-2 px-3 text-slate-900 placeholder: opacity-50"
            />
        </>
    )
}

export default Input;