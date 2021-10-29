import { useEffect, useState } from "react";

export default function useIosDetect() {
    const [isIos, setIsIos] = useState(true);
    
    useEffect(() => {
      const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
      const mobile = Boolean(
        userAgent.match(
          /iPhone|iPad|iPod/i
        )
      );
      setIsIos(mobile);
    }, []);
    return { isIos };
  }