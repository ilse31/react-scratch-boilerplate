import * as React from "react";
import { useNavigate } from "react-router-dom";
import Alert from "src/components/Alert/Alert";
import Button from "src/components/Button/Button";

type Props = {
  direction?: string;
  variant?: "success" | "warning" | "error";
  message?: string;
};

const AlertPages = (props: Props) => {
  const navigate = useNavigate();
  const [alertFields, setAlertFields] = React.useState<Props>();
  const [showAlert, setShowAlert] = React.useState(false);
  // const [activeAlert, setActiveAlert] = React.useState("");

  // const handleAlert = (active: string) => {
  //   setShowAlert(true);
  //   setActiveAlert(active);
  // };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    setAlertFields({
      ...alertFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAlert(true);
    console.log(alertFields);
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (showAlert) {
        setShowAlert(false);
        // setAlertFields({});
      }
    }, 2000);
  }, [showAlert]);
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <div className="flex flex-row gap-3">
        <Button variant="danger" size="base" onClick={() => navigate("/")}>
          BACK TO HOME
        </Button>
        <Button
          variant="primary"
          size="base"
          onClick={() => navigate("/design-system")}
        >
          BACK
        </Button>
      </div>
      <div className="text-center">
        <h1>EXAMPLE</h1>
      </div>
      <div className="w-[500px] bg-white shadow-lg p-5 rounded-md">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label
              htmlFor="direction"
              className="text-slate-500 font-semibold text-sm"
            >
              Direction
              <span className="text-red-500">*</span>
            </label>
            <select
              name="direction"
              id="direction"
              required
              className="block mt-1 w-full"
              onChange={(e) => handleChange(e)}
            >
              <option value="">Choose your alert direction</option>
              <option value="top-right">Top Right</option>
              <option value="top-left">Top Left</option>
              <option value="middle-top">Middle Top</option>
              <option value="middle-bottom">Middle Bottom</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-right">Bottom Right</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label
              htmlFor="variant"
              className="text-slate-500 font-semibold text-sm"
            >
              Variant
              <span className="text-red-500">*</span>
            </label>
            <select
              name="variant"
              id="variant"
              required
              className="block mt-1 w-full"
              onChange={(e) => handleChange(e)}
            >
              <option value="">Choose your alert variant</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label
              htmlFor="message"
              className="text-slate-500 font-semibold text-sm"
            >
              Message
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="message"
              required
              className="block w-full p-2"
              placeholder="your alert message"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <Button
            disabled={showAlert}
            type="submit"
            className="w-full rounded-sm text-white font-semibold bg-primary-500 p-2 mt-2"
          >
            Submit
          </Button>
        </form>
      </div>
      {showAlert && alertFields?.direction === "top-right" && (
        <Alert
          text={alertFields?.message as string}
          variant={alertFields?.variant}
          direction={alertFields?.direction}
        />
      )}
      {showAlert && alertFields?.direction === "top-left" && (
        <Alert
          text={alertFields?.message as string}
          variant={alertFields?.variant}
          direction={alertFields?.direction}
        />
      )}
      {showAlert && alertFields?.direction === "middle-top" && (
        <Alert
          text={alertFields?.message as string}
          variant={alertFields?.variant}
          direction={alertFields?.direction}
        />
      )}
      {showAlert && alertFields?.direction === "middle-bottom" && (
        <Alert
          text={alertFields?.message as string}
          variant={alertFields?.variant}
          direction={alertFields?.direction}
        />
      )}
      {showAlert && alertFields?.direction === "bottom-left" && (
        <Alert
          text={alertFields?.message as string}
          variant={alertFields?.variant}
          direction={alertFields?.direction}
        />
      )}
      {showAlert && alertFields?.direction === "bottom-right" && (
        <Alert
          text={alertFields?.message as string}
          variant={alertFields?.variant}
          direction={alertFields?.direction}
        />
      )}
      {/* <p>Alertnya ntar di sini</p> */}
    </div>
  );
};

export default React.memo(AlertPages);
