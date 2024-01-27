import { siteConfig } from "../config/site"
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

interface EmailContactUserProps {
  name: string
  email: string
  message: string
}

export const EmailContactUser = ({
  name = "zenorocha",
  message = "hola mundo",
  email = "test@test.com",
}: EmailContactUserProps) => {
  return (
    <Html>
      <Head />
      <Preview>Gracias por ponerte en contacto con nostros</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={114} src={`${siteConfig.url}/logo.svg`} />
          </Section>
          <Section style={content}>
            <Text style={paragraph}>
              Mensaje de <strong>{name}</strong> desde el formulario de contacto
              de la pagina web de la iglesia
            </Text>
            <Text style={paragraph}>
              <strong>Mensaje:</strong>
            </Text>
            <Text style={paragraph}>{message}</Text>
            <Text style={paragraph}>
              Puedes responderle a {name} a su correo{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Text style={{ textAlign: "center", color: "#706a7b" }}>
            © 2023 Lake Buena Vista Spanish SDA
            <br />
            3979 S Orange Blossom Trl, Orlando, FL, United States, Florida
          </Text>
        </Section>
      </Body>
    </Html>
  )
}

export default EmailContactUser

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif"

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
}

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
}

const container = {
  width: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
}

const footer = {
  width: "580px",
  margin: "0 auto",
}

const content = {
  padding: "5px 50px 10px 60px",
}

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
  backgroundColor: "#000",
}

const sectionsBorders = {
  width: "100%",
  display: "flex",
}

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
}

const sectionCenter = {
  borderBottom: "1px solid rgb(0,0,0)",
  width: "102px",
}

const link = {
  textDecoration: "underline",
}
