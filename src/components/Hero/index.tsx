import {
  Eyebrow,
  HeroContent,
  HeroSection,
  HeroText,
  HeroTitle
} from './styles'

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <Eyebrow>Novas oportunidades todos os dias</Eyebrow>
      <HeroTitle>Seu próximo grande trabalho começa aqui.</HeroTitle>
      <HeroText>
        Encontre vagas em tecnologia, design e criatividade que combinam com o
        seu talento e com o futuro que você quer construir.
      </HeroText>
    </HeroContent>
  </HeroSection>
)

export default Hero
