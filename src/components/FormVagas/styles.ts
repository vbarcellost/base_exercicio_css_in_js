import styled from 'styled-components'

export const Form = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  margin-top: -34px;
  padding: 18px;
  border: 1px solid rgb(255 255 255 / 70%);
  border-radius: 18px;
  background: rgb(255 255 255 / 96%);
  box-shadow: 0 18px 50px rgb(23 32 51 / 13%);
  backdrop-filter: blur(16px);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: -24px;
    padding: 14px;
  }
`

export const FieldWrapper = styled.div`
  position: relative;

  &::before {
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
    color: var(--muted);
    font-size: 20px;
    content: '⌕';
  }
`

export const Field = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 18px 0 48px;
  border: 1px solid var(--border);
  border-radius: 12px;
  outline: none;
  background: #f8f9fc;
  color: var(--ink);
  font-size: 16px;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;

  &::placeholder {
    color: #98a2b3;
  }

  &:focus {
    border-color: var(--primary);
    background: #fff;
    box-shadow: 0 0 0 4px rgb(108 92 231 / 12%);
  }
`

export const SearchButton = styled.button`
  min-width: 150px;
  height: 54px;
  padding: 0 24px;
  border: 0;
  border-radius: 12px;
  background: var(--primary);
  box-shadow: 0 10px 22px rgb(108 92 231 / 25%);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: var(--primary-dark);
    box-shadow: 0 14px 28px rgb(108 92 231 / 32%);
  }

  &:focus-visible {
    outline: 3px solid rgb(108 92 231 / 25%);
    outline-offset: 3px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`
