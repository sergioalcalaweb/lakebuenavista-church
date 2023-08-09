import { siteConfig } from '../config/site';
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailContactUserProps {
  name?: string;
}

export const EmailContactUser = ({
  name = 'zenorocha',
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
            <Text style={paragraph}>Hola {name},</Text>
            <Text style={paragraph}>
              ¡Gracias por visitar nuestro sitio web y por ponerte en contacto con nuestra congregación adventista del Séptimo Día! 
              Es un gusto recibir tu mensaje y estamos emocionados de que estés interesado en conocer más sobre nuestra comunidad.
            </Text>
            <Text style={paragraph}>
              Si tienes más preguntas o deseas obtener detalles adicionales sobre nuestra congregación y actividades, no dudes en 
              hacérnoslo saber. Estamos aquí para servirte y esperamos conocerte pronto en persona.
            </Text>
            <Text style={paragraph}>
              Gracias nuevamente por tu interés en nuestra comunidad adventista del Séptimo Día. ¡Que Dios te bendiga y te guíe en 
              cada paso de tu viaje espiritual!
            </Text>
            <Text style={paragraph}>
              Con afecto cristiano,
              <br />
              Pastor Abel Morrobel
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Text style={{ textAlign: 'center', color: '#706a7b' }}>
            © 2023  Lake Buena Vista Spanish SDA<br />
            3979 S Orange Blossom Trl, Orlando, FL, United States, Florida
          </Text>
        </Section>
      </Body>
    </Html>
  );
};

export default EmailContactUser;

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const main = {
  backgroundColor: '#efeef1',
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  width: '580px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
};

const footer = {
  width: '580px',
  margin: '0 auto',
};

const content = {
  padding: '5px 50px 10px 60px',
};

const logo = {
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
  padding: 30,
  backgroundColor: '#000'
};

const sectionsBorders = {
  width: '100%',
  display: 'flex',
};

const sectionBorder = {
  borderBottom: '1px solid rgb(238,238,238)',
  width: '249px',
};

const sectionCenter = {
  borderBottom: '1px solid rgb(0,0,0)',
  width: '102px',
};

const link = {
  textDecoration: 'underline',
};
