import {
  CardTop,
  CompanyMark,
  ContractBadge,
  JobCard,
  JobLink,
  JobMeta,
  JobTitle,
  Requirements,
  Salary
} from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const formatarSalario = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(valor)

const Vaga = (props: Props) => (
  <JobCard>
    <CardTop>
      <CompanyMark>{props.titulo.charAt(0)}</CompanyMark>
      <ContractBadge>{props.modalidade}</ContractBadge>
    </CardTop>
    <JobTitle>{props.titulo}</JobTitle>
    <JobMeta>
      <li>⌖ {props.localizacao}</li>
      <li>● {props.nivel}</li>
    </JobMeta>
    <Requirements>
      {props.requisitos.map((requisito) => (
        <span key={requisito}>{requisito}</span>
      ))}
    </Requirements>
    <Salary>
      <strong>{formatarSalario(props.salarioMin)}</strong> a{' '}
      {formatarSalario(props.salarioMax)}
    </Salary>
    <JobLink href="#">Ver detalhes da vaga</JobLink>
  </JobCard>
)

export default Vaga
