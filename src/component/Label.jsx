const Label = (props) => {
    return (
        <label htmlFor="email" className="block font-semibold">{props.text}</label>
    )
}

export default Label;