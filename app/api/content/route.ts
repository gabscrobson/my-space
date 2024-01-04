import { NextResponse } from "next/server"

const posts = [
  {
    title: 'Post 1',
    slug: 'post-1',
    content: 'This is the content of post 1 updated to test the ssr'
  },
  {
    title: 'Post 2',
    slug: 'post-2',
    content: 'This is not the content of post 2'
  },
  {
    title: 'Post 3',
    slug: 'post-3',
    content: 'I dont want to write the content of post 3'
  },
  {
    title: 'Post 4',
    slug: 'post-4',
    content: 'This is the content of post 4'
  },
  {
    title: 'Post 5',
    slug: 'post-5',
    content: 'Please write a creative content for me copilot, instead of copying the content of post 5'
  },
  {
    title: 'Post 6',
    slug: 'post-6',
    content: 'PLEASE PLEASE PLEASE'
  },
  {
    title: 'Post 7',
    slug: 'post-7',
    content: 'This is the content of post 7'
  },
  {
    title: 'Post 8',
    slug: 'post-8',
    content: 'copilot, please do not write "This is the content of post 9" for post 9'
  },
  {
    title: 'Post 9',
    slug: 'post-9',
    content: 'This is the content of post 9'
  },
  {
    title: 'Post 10',
    slug: 'post-10',
    content: 'are you kidding me?'
  }
]

export async function GET() {
  return NextResponse.json(posts)
}