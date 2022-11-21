import PageHeader from "./common/pageHeader";

const SignUp = () => {
  return (
    <>
      <PageHeader
        title="Sign Up with Real App"
        description="Open a new account, it is free you yammani!"
      />

      <form noValidate autoComplete="off">
        <div className="alert alert-danger">Error</div>

        <div className="form-group my-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control is-invalid"
          />
          <span className="invalid-feedback">
            please provide a valid email address
          </span>
        </div>

        <div className="form-group my-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control is-invalid"
          />
          <span className="invalid-feedback">
            please provide a valid password
          </span>
        </div>

        <div className="form-group my-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control is-invalid"
          />
          <span className="invalid-feedback">
            please provide a valid name address
          </span>
        </div>

        <div className="my-2">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
