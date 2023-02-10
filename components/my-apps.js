import Link from 'next/link'
import Subhead from './subhead';

export default function MyApps() {

  const apps = [
    { 
      imageUrl: '/images/nomaste-app-icon-inner.png',
      color: '#ff5638',
      label: 'Nomaste',
      link: '/nomaste',
    },
    {
      imageUrl: '/images/ghost-ar-app-icon-inner.png',
      color: '#000',
      label: 'Ghost AR',
      link: '/ghost-ar',
    }
  ];
  return (
    <div className="sm:pl-12">
      <Subhead title="My apps" />
      {apps.map(({ imageUrl, color, label, link }) => (
        <Link key={label} href={link} className="block my-6 hover-glow">
          <div className="relative w-24">
            <img src={imageUrl} alt={label} className="absolute w-full h-full m-0" />
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="608" height="608" viewBox="-302 -302 608 608">
              <path fill={color} d="M0,288 C126.2,288,196.3563,288,242.1782,242.1782 C288,196.3563,288,126.2,288,0 C288,-126.2,288,-196.3563,242.1782,-242.1782 C196.3563,-288,126.2,-288,0,-288 C-126.2,-288,-196.3563,-288,-242.1782,-242.1782 C-288,-196.3563,-288,-126.2,-288,0 C-288,126.2,-288,196.3563,-242.1782,242.1782 C-196.3563,288,-126.2,288,0,288Z" />
            </svg>
          </div>
          {/* <p className="text-center mt-0 mb-6 w-24">{label}</p> */}
        </Link>
      ))}
    </div>
  );
}