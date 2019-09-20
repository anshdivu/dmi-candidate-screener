import React from "react";
import useForm from "react-hook-form";
import { OnSubmit } from "react-hook-form/dist/types";

type Props = {};

const CreateAwsForm: React.FC<Props> = () => {
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
          What are the distinctions between IaaS, PaaS, and Serverless? Which
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
          What are the various forms of storage available in an AWS Storage
          account? What do you use each for?{" "}
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
          What are EC2, ECS, and EKS? What are their key differences?
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
          What are SQS and SNS? When do we use SQS and when do you use SNS?
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
          What am I talking about when I say Open API Definition? (If they
          hesitate, can suggest "used to be called Swagger."){" "}
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
          What is structured vs. unstructured data?{" "}
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
          When does a NoSQL datastore make sense?{" "}
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
          How would you design the following scenario on AWS: We need an
          internal app for planning our technical talks . The app will need to
          provide login using DMI credentials. For a regular user, it should
          provide an UI for entering the talk's title, summary, and uploading
          slide deck (add/remove/edit enabled). For an admin user, it should
          provide an admin interface for dragging and dropping an unscheduled
          talk into a calendar view for scheduling. When the admin clicks on the
          save button, the app should store the schedule and send out an email
          notification about the newly secheduled talks to the DMI community.
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
          How would you design the following scenario in AWS: A client wants us
          to develop a Driver Support App for truck drivers on AWS. This
          client's engines have an IOT device that report the status and
          location of the trucks to AWS backend every minute. Whenever the truck
          breaks down, the driver can go to their Driver Support App on their
          phone and view the diagnosis of the problem. The diagnosis is divided
          into several parts, each part runs independently and reports back to
          the app as it completes the analysis. The algorithms for the diagnosis
          need to retrieve the last n number of statuses for analysis, so we
          need to have a database in place to support that. The app should also
          present the trucker the information of the nearest repair shop. The
          information of the nearest repair shop is retrieved through a
          third-party api. (Make other simplifying assumptions as needed.)
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

export default CreateAwsForm;
