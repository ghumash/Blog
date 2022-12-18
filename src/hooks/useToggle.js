import React from "react";

export function useToggle() {
  const [status, setStatus] = React.useState(false);
  const toggleStatus = () => setStatus(!status);

  return {
    status,
    toggleStatus,
  };
}
