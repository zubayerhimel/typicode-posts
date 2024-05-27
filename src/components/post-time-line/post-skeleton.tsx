const PostSkeleton = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <div className='space-y-2 mb-4' key={index}>
      <div className='h-6 w-full bg-gray-500 animate-pulse rounded-md'></div>
      <div className='h-4 w-64 bg-gray-500 animate-pulse rounded-md'></div>
      <div className='h-20 w-full bg-gray-500 animate-pulse rounded-md'></div>
    </div>
  ));
};

export default PostSkeleton;
