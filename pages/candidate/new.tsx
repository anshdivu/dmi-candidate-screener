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
                ref={register({ required: true })}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="lastName"
                ref={register({ required: true })}
              />
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
