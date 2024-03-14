import { useEffect, useState } from "react"

export const useUnmountNode = (unmountAfterDuration = 5000) => {
  const [canUnmount, setCanUnmount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanUnmount(true);
    }, unmountAfterDuration);

    return () => clearTimeout(timer);
  }, []);

  return canUnmount;
};