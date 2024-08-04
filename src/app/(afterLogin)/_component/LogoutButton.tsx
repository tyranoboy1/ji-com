import style from "./style/logoutButton.module.css";

const LogoutButton = () => {
  const me = {
    // 임시로 목업 정보
    id: "jihoon",
    nickname: "지훈",
    image: "/5Udwvqim.jpg",
  };
  const onLogout = () => {};
  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
};

export default LogoutButton;
