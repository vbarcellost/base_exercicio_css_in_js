import styled from 'styled-components'

export const JobCard = styled.li`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
  box-shadow: 0 6px 24px rgb(23 32 51 / 5%);
  list-style: none;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;

  &:hover {
    transform: translateY(-6px);
    border-color: #c8c1ff;
    box-shadow: 0 20px 42px rgb(23 32 51 / 11%);
  }
`

export const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`

export const CompanyMark = styled.span`
  flex: 0 0 46px;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: #efedff;
  color: var(--primary);
  font-weight: 800;
  text-transform: uppercase;
`

export const ContractBadge = styled.span`
  padding: 7px 10px;
  border-radius: 999px;
  background: #e9fbf5;
  color: #087f5b;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`

export const JobTitle = styled.h3`
  margin-top: 22px;
  font-size: 20px;
  line-height: 1.3;
`

export const JobMeta = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  margin-top: 12px;
  color: var(--muted);
  font-size: 14px;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`

export const Requirements = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 20px;

  span {
    padding: 6px 9px;
    border-radius: 7px;
    background: #f2f4f7;
    color: #475467;
    font-size: 12px;
    font-weight: 700;
  }
`

export const Salary = styled.p`
  margin-top: 22px;
  color: var(--ink);
  font-size: 15px;

  strong {
    color: var(--primary-dark);
    font-size: 18px;
  }
`

export const JobLink = styled.a`
  width: 100%;
  margin-top: auto;
  padding-top: 22px;
  color: var(--primary-dark);
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;

  &::after {
    margin-left: 7px;
    content: '→';
    transition: margin-left 0.2s;
  }
  &:hover::after {
    margin-left: 12px;
  }
  &:focus-visible {
    border-radius: 4px;
    outline: 3px solid rgb(108 92 231 / 25%);
    outline-offset: 4px;
  }
`
