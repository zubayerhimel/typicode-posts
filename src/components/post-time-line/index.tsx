"use client";

import { useGetPosts, useGetUsers } from "@/api";
import { MergedPost, Post, User } from "./types";
import PostSkeleton from "./post-skeleton";

const PostTimeLine = () => {
  const { data: userData, isLoading: loadingUserData } = useGetUsers();
  const { data: postData, isLoading: loadingPosts } = useGetPosts();

  // Function to merge posts with user information
  const mergePostsWithUsers = (posts: Post[], users: User[]): MergedPost[] => {
    return posts.map((post) => {
      const user = users.find((user) => user.id === post.userId);
      return {
        ...post,
        name: user ? user.name : null,
      };
    });
  };

  if (loadingUserData || loadingPosts) {
    return <PostSkeleton />;
  }
  const mergedPosts: MergedPost[] = mergePostsWithUsers(postData, userData);

  // Sort the mergedPosts in descending order of post id
  const sortedMergedPosts = mergedPosts.sort((a, b) => b.id - a.id);

  return (
    <>
      <ol className='relative border-s border-gray-200 dark:border-gray-700'>
        {sortedMergedPosts.map((post: MergedPost) => (
          <li className='mb-10 ms-4'>
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
            <h3 className='text-xl font-semibold text-orange-900 dark:text-orange-600'>{post.title}</h3>
            <h3 className='text-md mb-2 font-medium text-gray-900 dark:text-gray-400'>{post.name}</h3>
            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>{post.body}</p>
          </li>
        ))}
      </ol>
    </>
  );
};

export default PostTimeLine;
