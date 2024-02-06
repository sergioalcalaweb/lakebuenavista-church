import { Button } from "@nextui-org/button"
import Link from "next/link"

interface LinkButtonProps {
  link: string
  text: string
  target?: string
}

const LinkButton = ({ link, text, target = "_self" }: LinkButtonProps) => (
  <Button
    as={Link}
    href={link}
    target={target}
    variant="solid"
    color="default"
    size="lg"
  >
    {text}
  </Button>
)

export default LinkButton
