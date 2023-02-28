import Link from 'next/link'
import DateDisplay from '../components/date'

export default function PostList({ allPostsData, limit = 0 }) {
  const posts = limit ? allPostsData.slice(0, limit) : allPostsData;
  console.log('posts: ', posts.length);
  return (
    <ul className="list-none p-0 mb-12">
      {posts.map(({ id, date, title }) => (
        <li className="my-5 pl-0 flex items-start" key={id}>
          <span className="text-2xl text-primary mr-2">→</span>
          <div>
            <p className="text-2xl m-0">
              <Link className="hover-glow no-underline font-light" href={`/posts/${id}`}>{title}</Link>
            </p>
            <DateDisplay dateString={date} />
          </div>
        </li>
      ))}
    </ul>
  );
}