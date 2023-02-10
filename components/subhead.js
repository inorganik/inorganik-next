export default function Subhead({ title }) {
  return (
    <div className="flex my-4">
      <h4 className="m-0 align-bottom">{title}</h4>
      <span className="w-2"></span>
      <span className="h-[17px] flex-grow border-b border-neutral border-dotted"></span>
    </div>
  )
}