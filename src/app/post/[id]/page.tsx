

interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  async function getPost(id: string): Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return post;
  }
  
  export default async function Post({ params }: { params: { id: string } }) {
    const post = await getPost(params.id);
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <a href="/">Go back</a>
      </div>
    );
  }
  