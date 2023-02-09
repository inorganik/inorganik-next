import Image from 'next/image'

export default function ProjectCard({ link, imageUrl, label, description}) {

  return (
    <div className="flex flex-col sm:flex-row my-6 pt-6">
      <a href={link} className="block flex-grow hover-glow">
        <Image className="object-cover m-0 h-48 sm:w-48" src={imageUrl} alt={label} width={600} height={600} />
      </a>
      <div className="pt-4 sm:pl-4 sm:pt-0 flex-auto">
        <p className="m-0">{description} <a href={link}>Visit {label}</a></p>
      </div>
    </div>
  )
}