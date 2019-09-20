import React from "react";
import useForm from "react-hook-form";
import { OnSubmit } from "react-hook-form/dist/types";

type Props = {};

const CreateJsForm: React.FC<Props> = () => {
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
        <label className="label">
          What is the difference between == and ===?{" "}
        </label>
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
        <label className="label">What is hoisting? </label>
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
        <label className="label">
          What is the diff. Between const, let and var?{" "}
        </label>
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
        <label className="label">
          What is the async-await (What are Promises)?{" "}
        </label>
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
        <label className="label">
          What is the difference between array.forEach, Array.map and
          Array.filter?{" "}
        </label>
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
        <label className="label">
          What is the diff. Between a function declaration and an arrow
          function?{" "}
        </label>
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
        <label className="label">
          What is Typescript?  How is it different from Javascript?{" "}
        </label>
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

export default CreateJsForm;
