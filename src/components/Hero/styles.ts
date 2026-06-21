import styled from 'styled-components'
import { Container } from '../../styles'

export const HeroSection = styled.section`
  position: relative;
  min-height: 410px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(
      90deg,
      rgb(17 24 42 / 98%) 0%,
      rgb(17 24 42 / 88%) 48%,
      rgb(17 24 42 / 35%) 100%
    ),
    url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg')
      center 34% / cover;

  &::after {
    position: absolute;
    right: -80px;
    bottom: -160px;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: var(--primary);
    filter: blur(120px);
    opacity: 0.3;
    content: '';
  }

  @media (max-width: 700px) {
    min-height: 390px;
    background-position: 62% center;
  }
`

export const HeroContent = styled(Container)`
  position: relative;
  z-index: 1;
  color: #fff;
`

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  color: #83f1cf;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  &::before {
    width: 28px;
    height: 2px;
    background: var(--accent);
    content: '';
  }
`

export const HeroTitle = styled.h2`
  max-width: 720px;
  font-family: Gloock, serif;
  font-size: clamp(38px, 5vw, 62px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -1.6px;
`

export const HeroText = styled.p`
  max-width: 590px;
  margin-top: 20px;
  color: #d7dbea;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`
