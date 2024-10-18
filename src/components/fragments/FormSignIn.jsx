import Button from "../elements/Button";
import CheckBox from "../elements/Checkbox";
import LabelInput from "../elements/LabelInput";

const FormSignIn = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabelInput />
      </div>
      <div className="mb-6">
        <LabelInput />
      </div>
      <div className="mb-3">
        <CheckBox />
        <label htmlFor="status" className="text-sm text-gray-01 ms-6">
          Keep me signed in
        </label>
      </div>
    <Button/>
    </form>
  );
};

export default FormSignIn;
