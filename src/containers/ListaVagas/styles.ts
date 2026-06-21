import styled from 'styled-components'

export const JobsSection = styled.section`
  padding-top: 54px;
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;

  h2 {
    font-family: Gloock, serif;
    font-size: clamp(28px, 4vw, 38px);
    font-weight: 400;
    letter-spacing: -0.8px;
  }

  p {
    margin-top: 7px;
    color: var(--muted);
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const ResultCount = styled.span`
  flex: 0 0 auto;
  padding: 8px 12px;
  border-radius: 999px;
  background: #e8e5ff;
  color: var(--primary-dark);
  font-size: 13px;
  font-weight: 800;
`

export const JobsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  list-style: none;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const EmptyState = styled.div`
  padding: 56px 24px;
  border: 1px dashed #c8c1ff;
  border-radius: 18px;
  background: #fff;
  color: var(--muted);
  text-align: center;

  strong {
    display: block;
    margin-bottom: 8px;
    color: var(--ink);
    font-size: 18px;
  }
`
