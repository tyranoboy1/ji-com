import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import style from "./home.module.css";

const Page = () => {
  return (
    <main className={style.main}>
      <Tab />
      <PostForm />
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
};
export default Page;
