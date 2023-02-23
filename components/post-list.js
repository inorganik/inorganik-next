import Link from 'next/link'
import DateDisplay from '../components/date'

export default function PostList({ allPostsData, limit = 0 }) {
  const posts = limit ? allPostsData.slice(0, limit) : allPostsData;
  return (
    <ul className="list-none p-0 mb-12">
      {posts.map(({ id, date, title }) => (
        <li className="mb-5 pl-0" key={id}>
          <p className="text-2xl mb-0 -indent-8 pl-8">
            <Link className="hover-glow no-underline font-light" href={`/posts/${id}`}><span className="text-primary">→</span> {title}</Link>
          </p>
          <DateDisplay dateString={date} shouldIndent={true} />
        </li>
      )).slice(0, 4)}
    </ul>
  );
}