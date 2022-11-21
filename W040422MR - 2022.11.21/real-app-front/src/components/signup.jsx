import Input from "./common/input";
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

        <Input type="email" name="email" label="Email" required />

        <Input type="password" name="password" label="Password" required />

        <Input type="text" name="name" label="Name" required />

        <div className="my-2">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
