import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { BsCheckCircleFill } from "react-icons/bs";
import { PiWarningCircleFill } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";
import clsxm from "src/helpers/clsx";

const AlertVariants = ["success", "warning", "error"] as const;

type AlertProps = {
  text: string;
  variant?: (typeof AlertVariants)[number];
  direction: string;
  show?: boolean;
  alertIconSuccess?: IconType;
  alertIconWarning?: IconType;
  alertIconError?: IconType;
};

const Alert = ({
  text,
  variant,
  direction,
  show = true,
  alertIconSuccess: AlertIconSuccess,
  alertIconWarning: AlertIconWarning,
  alertIconError: AlertIconError,
}: AlertProps) => {
  const [showAlert, setShowAlert] = useState<boolean>(show);
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, []);
  return (
    <>
      {showAlert && (
        <div
          className={clsxm(
            "fixed bg-white p-2 rounded-md transition shadow-md border",
            [
              direction === "top-right" &&
                "top-5 right-5 animate-swoosh_from_top",
              direction === "top-left" &&
                "top-5 left-5 animate-swoosh_from_top",
              direction === "bottom-left" &&
                "bottom-5 left-5 animate-swoosh_from_bottom",
              direction === "bottom-right" &&
                "bottom-5 right-5 animate-swoosh_from_bottom",
              direction === "middle-top" && "top-5 animate-swoosh_from_top",
              direction === "middle-bottom" &&
                "bottom-5 animate-swoosh_from_bottom",
            ]
          )}
        >
          {variant === "success" && (
            <div className="flex items-center gap-1">
              {AlertIconSuccess ? (
                <AlertIconSuccess />
              ) : (
                <BsCheckCircleFill
                  fill="#22c55e"
                  className="w-[16px] h-[16px]"
                />
              )}
              <p className="mb-1 text-slate-700">{text}</p>
            </div>
          )}
          {variant === "warning" && (
            <div className="flex items-center gap-1">
              {AlertIconWarning ? (
                <AlertIconWarning />
              ) : (
                <PiWarningCircleFill
                  fill="#f59e0b"
                  className="w-[20px] h-[20px]"
                />
              )}
              <p className="mb-1 text-slate-700">{text}</p>
            </div>
          )}
          {variant === "error" && (
            <div className="flex items-center gap-1">
              {AlertIconError ? (
                <AlertIconError />
              ) : (
                <AiFillCloseCircle
                  fill="#ef4444"
                  className="w-[20px] h-[20px]"
                />
              )}
              <p className="mb-1 text-slate-700">{text}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;
