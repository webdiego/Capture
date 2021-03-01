import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TopScroll = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scroll({
      top: -160,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default TopScroll;
