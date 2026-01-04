import React from "react";
import Button from "./Button";
import { useDemoForm } from "../context/DemoFormContext";
import { trackDemoFormOpened } from "../utils/eventTracker";

export default function DemoCTAButton({ children = "Try Nobi on your site", className = "", ...props }) {
  const { onOpen } = useDemoForm();

  const handleClick = () => {
    trackDemoFormOpened();
    onOpen();
  };

  return (
    <Button
      size="lg"
      className={`w-full sm:w-auto ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span>{children}</span>
    </Button>
  );
}
