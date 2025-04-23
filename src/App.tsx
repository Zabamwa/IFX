import { useEffect, useState, useMemo } from "react";
import { useGetPostsQuery } from "./api/posts";
import { useGetUsersQuery } from "./api/users";
import { Container } from "./App.styles";
import { IPosts } from "./types/post";
import { IUser } from "./types/user";
import useDebounce from "./hooks/useDebounce";

import AddPostForm from "./components/AddPostForm/AddPostForm";
import PostList from "./components/PostList/PostList";
import SearchInput from "./components/SearchInput/SearchInput";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import ErrorAlert from "./components/ErrorAlert/ErrorAlert.tsx";

const App = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [search, setSearch] = useState<string>("");
  const [showPostForm, setShowPostForm] = useState<boolean>(false);

  const debouncedSearch = useDebounce(search, 300);

  const {
    currentData: postsData,
    error: postsError,
    isFetching: isFetchingPosts,
  } = useGetPostsQuery();
  const {
    currentData: usersData,
    error: usersError,
    isFetching: isFetchingUsers,
  } = useGetUsersQuery();

  useEffect(() => {
    if (postsData) setPosts(postsData);
  }, [postsData]);

  useEffect(() => {
    if (!postsData) return;
    const filtered = debouncedSearch
      ? postsData.filter((post) =>
          post.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
        )
      : postsData;
    setPosts(filtered);
  }, [debouncedSearch, postsData]);

  const userMap = useMemo(() => {
    const map: { [key: number]: IUser } = {};
    usersData?.forEach((user) => (map[user.id] = user));
    return map;
  }, [usersData]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const handleClose = () => setShowPostForm(false);

  const handleAddPost = (post: IPosts) => {
    setPosts((prev) => [post, ...prev]);
    setShowPostForm(false);
  };

  if (isFetchingPosts || isFetchingUsers)
    return <p>Loading data... please wait</p>;

  return (
    <Container $gap="36px" $direction="column">
      <ThemeToggle />
      <SearchInput value={search} onChange={handleSearch} />
      {showPostForm && (
        <AddPostForm
          handleClose={handleClose}
          addPost={handleAddPost}
          postIdx={posts.length}
        />
      )}
      <button onClick={() => setShowPostForm(!showPostForm)}>Add posts</button>
      {usersError && <ErrorAlert message="Error fetching users" />}
      {postsError && <ErrorAlert message="Error fetching posts" />}
      <PostList posts={posts} userMap={userMap} />
    </Container>
  );
};

export default App;
