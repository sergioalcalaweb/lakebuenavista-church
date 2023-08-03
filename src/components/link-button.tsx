import Link from "next/link";

interface LinkButtonProps {
  link: string,
  text: string
}

const LinkButton = ({link, text} : LinkButtonProps ) => (
  <Link
    className="group relative inline-block w-[250px] text-center overflow-hidden border border-gray-600 px-8 py-3 focus:outline-none focus:ring"
    href={link}
  >
    <span
      className="absolute inset-y-0 left-0 w-[2px] bg-gray-600 transition-all group-hover:w-full group-active:bg-gray-500"
    ></span>

    <span
      className="relative text-sm font-light text-gray-600 transition-colors group-hover:text-white"
    >
      {text}
    </span>
  </Link>
)
 
export default LinkButton;