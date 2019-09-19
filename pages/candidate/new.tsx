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
    <div className="container">
      <div className="notification">
        <form onSubmit={handleSubmit(formSubmission)}>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="firstName"
                placeholder="First"
                ref={register({ required: true })}
              />
              {errors.firstName && (
                <p className="help is-danger">First Name is Required</p>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="lastName"
                placeholder="Last"
                ref={register({ required: true })}
              />
              {errors.lastName && (
                <p className="help is-danger">Last Name is Required</p>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="name@email.com"
                name="email"
                ref={register({ required: true })}
              />
              {errors.email && (
                <p className="help is-danger">Email is Required</p>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Skills</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="skills"
                placeholder="Java, C#, React.js"
                ref={register({ required: true })}
              />
              {errors.skills && (
                <p className="help is-danger">Skills is Required</p>
              )}
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">
                Submit
              </button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCandidate;
