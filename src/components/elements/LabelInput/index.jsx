import Input from "./Input";
import Label from "./Label";

// sampai labelInput

const LabelInput = ({ label, name, type, placeholder, register }) => {
  
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} register={register}/>
    </>
  );
};

export default LabelInput;
