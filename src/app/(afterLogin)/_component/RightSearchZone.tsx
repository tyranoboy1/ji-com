"use client";
import SearchForm from "./SearchForm";
import style from "./style/rightSearchZone.module.css";
import { usePathname } from "next/navigation";

const RightSearchZone = () => {
  const pathname = usePathname();
  const onChangeFollow = () => {};
  const onChangeAll = () => {};
  if (pathname === "/explore") return null;

  if (pathname === "/search") {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input
                type="radio"
                name="userFilter"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="userFilter"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
          <div>
            <label>위치</label>
            <div className={style.radio}>
              <div>어디에서나</div>
              <input
                type="radio"
                name="locationFilter"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <div>현 위치 주변</div>
              <input
                type="radio"
                name="locationFilter"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 60, width: "inherit" }}>
      <SearchForm />
    </div>
  );
};

export default RightSearchZone;
