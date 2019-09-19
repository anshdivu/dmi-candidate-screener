import React from "react";
import useForm from "react-hook-form";
import { OnSubmit } from "react-hook-form/dist/types";

type Props = {};

const CreateCandidate: React.FC<Props> = () => {
  const { register, handleSubmit, errors } = useForm();

  const formSubmission: OnSubmit<Record<string, any>> = (data, event) => {
    console.log(errors);
    console.log(data);

    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit(formSubmission)}>
      <input
        type="text"
        placeholder="First Name"
        name="First Name"
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="Last Name"
        ref={register({ required: true })}
      />
      <input
        type="email"
        placeholder="Email"
        name="Email"
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="Skills"
        name="Skills"
        ref={register({ required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export default CreateCandidate;
