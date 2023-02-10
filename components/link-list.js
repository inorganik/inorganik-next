import Subhead from './subhead'

export default function LinkList({ title, links }) {

  return (
    <div className="sm:pl-12">
      <Subhead title={title} />
      <ul>
        {links.map(({ href, label }) => (
          <li key={label}>
            <a className="text-primary hover-glow" href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
