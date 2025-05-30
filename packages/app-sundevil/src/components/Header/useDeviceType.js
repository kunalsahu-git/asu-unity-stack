import { useState, useEffect } from "react";

const useDeviceType = () => {
  const getDeviceType = () => (typeof window !== "undefined" && window.innerWidth <= 1260 ? "mobile" : "desktop");

  const [device, setDevice] = useState(getDeviceType);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setDevice(getDeviceType());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useDeviceType;
