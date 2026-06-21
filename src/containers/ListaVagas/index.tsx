import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import {
  EmptyState,
  JobsGrid,
  JobsSection,
  ResultCount,
  SectionHeader
} from './styles'

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['Node.js', 'TypeScript', 'APIs', 'SQL']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['React', 'Node.js', 'TypeScript', 'Git']
  },
  {
    id: 4,
    titulo: 'Designer de interfaces',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['Figma', 'UI', 'UX', 'Design System']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['React', 'TypeScript', 'Testes', 'CSS']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor front-end para projeto internacional',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'pj',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: ['React', 'TypeScript', 'Inglês', 'Testes']
  },
  {
    id: 7,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'React']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter((vaga) => {
    const conteudo = `${vaga.titulo} ${vaga.requisitos.join(' ')}`.toLowerCase()
    return conteudo.includes(filtro)
  })

  return (
    <>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <JobsSection>
        <SectionHeader>
          <div>
            <h2>Vagas em destaque</h2>
            <p>Oportunidades selecionadas para você dar o próximo passo.</p>
          </div>
          <ResultCount>
            {vagasFiltradas.length}{' '}
            {vagasFiltradas.length === 1 ? 'vaga' : 'vagas'}
          </ResultCount>
        </SectionHeader>
        {vagasFiltradas.length > 0 ? (
          <JobsGrid>
            {vagasFiltradas.map((vaga) => (
              <Vaga
                key={vaga.id}
                titulo={vaga.titulo}
                localizacao={vaga.localizacao}
                nivel={vaga.nivel}
                modalidade={vaga.modalidade}
                salarioMin={vaga.salarioMin}
                salarioMax={vaga.salarioMax}
                requisitos={vaga.requisitos}
              />
            ))}
          </JobsGrid>
        ) : (
          <EmptyState>
            <strong>Nenhuma vaga encontrada</strong>
            Tente pesquisar por outro cargo ou tecnologia.
          </EmptyState>
        )}
      </JobsSection>
    </>
  )
}

export default ListaVagas
