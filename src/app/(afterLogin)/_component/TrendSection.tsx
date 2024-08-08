"use client";

import { usePathname } from "next/navigation";
import style from "./style/trendSection.module.css";
import Trend from "./Trend";

const TrendSection = () => {
  const pathname = usePathname();

  if (pathname === "/explore") return null;

  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
};

export default TrendSection;
