import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit',
    title: string,
    icon?: string,
    variant: string
}


const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
      <button className={`flexCenter gap-2 px-4 py-2 rounded-full border ${variant}`} type={type} >
          {icon && <Image src={icon} alt={title} width={18} height={18} />}
          <label className="bold-12 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button