import Image from 'next/image'

export default function ProjectCard({ link, imageUrl, label, description}) {

  return (
    <div className="flex flex-col sm:flex-row my-6 first:mt-0 pt-6">
      <a href={link} className="block flex-grow hover-glow">
        <Image className="object-cover m-0 h-48 w-full sm:w-48" src={imageUrl} alt={label} width={300} height={300} sizes="(min-width: 640px) 192px, 600px" />
      </a>
      <div className="pt-4 sm:pl-4 sm:pt-0 flex-auto">
        <p className="m-0">{description} <a href={link}>Visit {label}</a></p>
      </div>
    </div>
  )
}