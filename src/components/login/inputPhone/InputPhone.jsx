import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const InputPhone = ({ name, register, errors }) => {
  return (
    <div>
      <PhoneInput
        name={name}
        error={errors[name] ? errors[name].message : ""}
        value={undefined}
        onChange={(value) => {
          register({ name: name }, { required: "Phone number is required" });
        }}
      />
    </div>
  );
};

export default InputPhone;
