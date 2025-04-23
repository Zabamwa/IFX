import Card from "../Card/Card";
import { IPosts } from "../../types/post";
import { IUser } from "../../types/user";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IPostListProps {
  posts: IPosts[];
  userMap: { [key: number]: IUser };
}

const PostList = ({ posts, userMap }: IPostListProps) => {
  const theme = useSelector((state: RootState) => state.theme);

  if (!posts.length) return <p>No posts available</p>;

  return (
    <>
      {posts.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          body={post.body}
          user={userMap[post.userId]}
          theme={theme}
        />
      ))}
    </>
  );
};

export default PostList;
