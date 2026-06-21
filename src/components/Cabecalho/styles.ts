import styled from 'styled-components'
import { Container } from '../../styles'

export const Header = styled.header`
  position: relative;
  z-index: 2;
  background: #11182a;
  color: #fff;
`

export const HeaderContent = styled(Container)`
  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h1 {
    font-family: Gloock, serif;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.5px;
  }
`

export const BrandMark = styled.span`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #8f7cff);
  box-shadow: 0 8px 24px rgb(108 92 231 / 35%);
  font-weight: 700;
`

export const HeaderTag = styled.span`
  padding: 8px 12px;
  border: 1px solid rgb(255 255 255 / 14%);
  border-radius: 999px;
  color: #cbd2e3;
  font-size: 13px;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    display: none;
  }
`
