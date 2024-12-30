"use client";
import { useEffect, useState } from 'react';


interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);  
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className='text-center font-bold text-4xl text-red-500 pt-5 underline'>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
