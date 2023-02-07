export default function Sidebar() {
  
  const links = [
    { href: 'http://github.com/inorganik', label: 'github' },
    { href: 'https://www.linkedin.com/in/jamierperkins/', label: 'linkedin' },
    { href: 'https://twitter.com/inorganik', label: '@inorganik' },
    { href: 'mailto:jamie@inorganik.net', label: 'email' },
  ];

  return (
    <div>
      <h4>Links</h4>
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