// components/LoadingBar.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const LoadingBar: React.FC = () => {
  const pathname = usePathname(); // Track the current pathname
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      NProgress.start();
    }

    // Finish the loading animation when the path changes
    NProgress.done();
    setLoading(false);

    // Dependency on `pathname` to run effect on route change
  }, [pathname, loading]);

  return null;
};

export default LoadingBar;
