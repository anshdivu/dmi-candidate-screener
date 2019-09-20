import React from "react";
import useForm from "react-hook-form";
import { OnSubmit } from "react-hook-form/dist/types";

type Props = {};

const CreateCSharpForm: React.FC<Props> = () => {
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
        <label className="label">What is an Object? </label>
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
        <label className="label">What is a Constructor? </label>
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
          What is the difference between ref and out parameters?{" "}
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
        <label className="label">What is serialization?</label>
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
          What is the difference between constants and read-only variables?
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
          What is “this”, and where can it NOT be used?{" "}
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
          What are value types and reference types? Name a few examples of each.{" "}
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
        <label className="label">What are sealed classes? </label>
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
          What are the differences between System.String and
          System.Text.StringBuilder?{" "}
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
          What is the base class in .NET from which all classes are derived
          from?{" "}
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
          What’s the difference between an interface and abstract class?{" "}
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
        <label className="label">What are C# attributes? </label>
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
          In your own words, describe in C# how to implement the singleton
          design pattern?{" "}
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
          In your own words, describe two methods of type casting in C#? What
          are the differences?{" "}
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
          Is C# code managed or unmanaged code? What is the difference?{" "}
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
          Describe in your own words the importance of Garbage collection in
          .NET{" "}
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

export default CreateCSharpForm;
