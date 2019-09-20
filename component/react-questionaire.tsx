import React from "react";
import useForm from "react-hook-form";
import { OnSubmit } from "react-hook-form/dist/types";

type Props = {};

const CreateReactForm: React.FC<Props> = () => {
  const { register, handleSubmit, errors } = useForm();

  const formSubmission: OnSubmit<Record<string, any>> = (data, event) => {
    console.log(errors);
    console.log(data);

    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit(formSubmission)}>
      <div className="field">
        <label className="label">What is the virtual DOM? </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="Grade"
            placeholder="Grade"
            ref={register({ required: true })}
          />
          {errors.firstName && (
            <p className="help is-danger">Grade is Required</p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label">
          Are you familiar with the lifecycle methods? (name and explain atleast
          3 methods){" "}
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="Grade"
            placeholder="Grade"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p className="help is-danger">Grade is Required</p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label">What is a HOC? </label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Grade"
            name="Grade"
            ref={register({ required: true })}
          />
          {errors.email && <p className="help is-danger">Grade is Required</p>}
        </div>
      </div>

      <div className="field">
        <label className="label">Are you familiar with the Context API? </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="Grade"
            placeholder="Grade"
            ref={register({ required: true })}
          />
          {errors.skills && <p className="help is-danger">Grade is Required</p>}
        </div>
      </div>

      <div className="field">
        <label className="label">What is JSX? </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="Grade"
            placeholder="Grade"
            ref={register({ required: true })}
          />
          {errors.skills && <p className="help is-danger">Grade is Required</p>}
        </div>
      </div>
    </form>
  );
};

export default CreateReactForm;
