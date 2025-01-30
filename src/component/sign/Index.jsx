import Input from "../input";
import Label from "../Label";

const Sign = () => {
    return (
        <div className="mb-3">
            <Label text="Email" />
            <Input placeholder="example@mail.com"/>
        </div>
    )
}

export default Sign;