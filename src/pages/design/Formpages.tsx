import { Formik } from "formik";
import { FiSave } from "react-icons/fi";
import Input from "src/components/InputForm";
import { LoginValidation } from "src/constant/validations/DesignSystemForm";
import { LoginValues } from "src/constant/FormikValues/DesignSystemFormValues";
import Button from "src/components/Button";

type Props = {};

const Formpages = (props: Props) => {
  return (
    <div className='flex flex-col gap-5'>
      <h1>Form Pages</h1>
      <Formik
        initialValues={LoginValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={LoginValidation}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <Input
              id='username'
              label='Username'
              onChange={handleChange}
              value={values.username}
              errorMessage={errors.username}
              placeholder='Username'
              about='This is the username field'
              name='username'
              type='text'
            />
            <Input
              id='password'
              label='Password'
              onChange={handleChange}
              placeholder='Password'
              value={values.password}
              errorMessage={errors.password}
              about='This is the password field'
              name='password'
              type='password'
            />
            <Button variant='sky' type='submit'>
              send
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Formpages;
