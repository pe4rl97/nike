
interface Props { 
    label: string, 
    iconUrl?: string,
    backgroundColor?: string,
    borderColor?: string,
    textColor?: string,
    fullWidth?: boolean
}
const Button = ({ label, iconUrl, backgroundColor = 'bg-coral-red', borderColor='border-coral-red', textColor='text-white', fullWidth=false }: Props) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border cursor-pointer font-montserrat text-lg leading-none ${backgroundColor} rounded-full ${textColor} ${borderColor} ${fullWidth && 'w-full'}`}>
            {label}
            {iconUrl && <img
                src={iconUrl}
                alt="arrow right icon"
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button>
    )
}

export default Button