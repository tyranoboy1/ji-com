"use client";
import style from "./tab.module.css";
import useStore from "@/store/useStore";

const Tab = () => {
  const tab = useStore((state) => state.tab);
  const setActiveTab = useStore((state) => state.setActiveTab);
  const onClickRec = () => {
    setActiveTab("rec");
  };
  const onClickFol = () => {
    setActiveTab("fol");
  };
  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={onClickRec}>
          추천
          <div className={style.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        <div onClick={onClickFol}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
