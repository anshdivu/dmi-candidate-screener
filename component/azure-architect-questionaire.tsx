import React from "react";
import useForm from "react-hook-form";
import { OnSubmit } from "react-hook-form/dist/types";

type Props = {};

const CreateAzArchitectForm: React.FC<Props> = () => {
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
          What are the distinctions between IaaS, PaaS, and serverless? Which
          one is typically the most cost-effective, and why?{" "}
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
        <label className="label">
          What does it mean to scale up vs. scale out? Which is typically more
          cost effective?{" "}
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
        <label className="label">
          What are some differences between using Windows and Linux hosts in
          Azure PaaS offerings?{" "}
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
          What are some differences between using .NET, .NET Core, and any other
          language in Azure PaaS offerings?{" "}
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
          What are some differences between SQL Server on-prem, Azure SQL
          Instance, and Azure SQL Managed Instance?{" "}
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
          What are the various forms of storage available in an Azure Storage
          account? What do you use each for?{" "}
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
          Give me a high-level overview of Azure Service Bus. What are the basic
          components, how do you publish to it, how do you consume from it?{" "}
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
          Walk me through the basics of deploying a Web App from Azure DevOps.{" "}
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
        <label className="label">How do you manage costs in Azure? </label>
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
          How do you control user access in Azure?{" "}
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

export default CreateAzArchitectForm;
