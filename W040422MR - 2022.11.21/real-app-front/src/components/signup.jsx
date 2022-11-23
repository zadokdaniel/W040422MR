import { useFormik } from "formik";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";

const SignUp = () => {
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate(values) {
      const errors = {};

      if (values.email === "") {
        errors.email = "email is required";
      } else if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com/g.test(values.email)) {
        errors.email = "please provide a valid email address";
      }

      return errors;
    },
    onSubmit(values) {
      console.log("submitted", values);
    },
  });

  return (
    <>
      <PageHeader
        title="Sign Up with Real App"
        description="Open a new account, it is free you yammani!"
      />

      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        <div className="alert alert-danger">Error</div>

        <Input
          type="email"
          label="Email"
          required
          {...form.getFieldProps("email")}
          error={form.touched.email && form.errors.email}
        />

        <Input
          type="password"
          name="password"
          label="Password"
          required
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
        />

        <Input
          type="text"
          label="Name"
          required
          {...form.getFieldProps("name")}
          error={form.touched.name && form.errors.name}
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
