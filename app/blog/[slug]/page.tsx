import { Post } from "@/app/lib/definitions";

export const revalidate = 100;

interface Props {
  params: {
    slug: string;
  }
}

const APP_URL = process.env.APP_URL

export async function generateStaticParams() {
  const posts: Post[] = await fetch(`${APP_URL}/api/content`).then((res) => res.json());
  return posts.map((post) => ({
     params: { slug: post.slug } 
  }));
}

export default async function Page({ params }: Props) {
  const posts: Post[] = await fetch(`${APP_URL}/api/content`).then((res) => res.json());
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}