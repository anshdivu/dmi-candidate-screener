import React from "react";
import CreateCandidateForm from "../../component/create-candidate.form";

type Props = {};

const CreateCandidatePage: React.FC<Props> = () => {
  return (
    <>
      <nav
        className="navbar has-shadow is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            DMI
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Candidate</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Log in</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="notification">
          <CreateCandidateForm />
        </div>
      </div>
    </>
  );
};

export default CreateCandidatePage;
