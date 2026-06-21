import { FormEvent, useState } from 'react'
import { Field, FieldWrapper, Form, SearchButton } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm} role="search">
      <FieldWrapper>
        <Field
          aria-label="Pesquisar por cargo ou tecnologia"
          placeholder="Busque por cargo ou tecnologia"
          onChange={(e) => setTermo(e.target.value)}
          type="search"
        />
      </FieldWrapper>
      <SearchButton type="submit">Pesquisar</SearchButton>
    </Form>
  )
}

export default FormVagas
