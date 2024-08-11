import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Post from "@/app/(afterLogin)/_component/Post";
import style from "./singlePost.module.css";
import CommentForm from "./_component/CommentForm";

const SinglePost = () => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <div style={{ marginTop: "53px" }}>
        <Post />
      </div>
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default SinglePost;
