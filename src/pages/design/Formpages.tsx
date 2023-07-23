import { Formik } from "formik";
import { FiSave } from "react-icons/fi";
import Input from "src/components/Form/InputForm";
import { LoginValidation } from "src/constant/validations/DesignSystemForm";
import { LoginValues } from "src/constant/FormikValues/DesignSystemFormValues";
import Button from "src/components/Button/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Formpages = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center'>
      <Formik
        initialValues={LoginValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={LoginValidation}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form className=' w-1/3 gap-3 flex-col flex' onSubmit={handleSubmit}>
            <Input
              color='sky'
              id='username'
              label='Username'
              variant='underlined'
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
              variant='underlined'
              color='sky'
              label='Password'
              onChange={handleChange}
              placeholder='Password'
              value={values.password}
              errorMessage={errors.password}
              about='This is the password field'
              name='password'
              type='password'
            />
            <Input
              id='confirmPassword'
              variant='underlined'
              color='sky'
              label='Password'
              onChange={handleChange}
              placeholder='Password'
              value={values.confirmPassword}
              errorMessage={errors.confirmPassword}
              about='This is the password field'
              name='password'
              type='password'
            />
            <div className='flex-col flex gap-3'>
              <Button
                onClick={() => {
                  navigate("/design-system");
                }}
                variant='danger'
                type='submit'
              >
                back
              </Button>
              <Button variant='sky' type='submit'>
                send
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Formpages;
