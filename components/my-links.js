import { supportMailLink } from "../lib/utils";

export default function MyLinks() {
  
  const links = [
    { href: 'http://github.com/inorganik', label: 'github' },
    { href: 'https://www.linkedin.com/in/jamierperkins/', label: 'linkedin' },
    { href: 'https://twitter.com/inorganik', label: '@inorganik' },
    { href: supportMailLink, label: 'email' },
  ];

  return (
    <div className="mb-6 sm:pl-12">
      <h4 className="mt-0">Links</h4>
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