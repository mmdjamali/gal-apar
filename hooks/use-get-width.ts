import { useEffect, useState, useRef } from "react";

export const useGetWidth = (...deps: any[]) => {
  const [width, setWidth] = useState<null | number>(null);
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current?.clientWidth || 0);

    const handleResize = () => {
      setWidth(ref.current?.clientWidth || 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref, ...deps]);

  return [ref, width] as [typeof ref, typeof width];
};
