import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Icon";
import { Input } from "../components/Input";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

export function Subscribe() {
  const navigate = useNavigate()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  async function handleSubscribe(e: FormEvent) {

    e.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-[1200px] flex flex-wrap items-center justify-between gap-8 mt-20 mx-auto lg:gap-0">
          <div className="p-6 flex flex-col items-center lg:max-w-[640px]">
            <Logo />
            <h1 className="mt-8 text-[2.5rem] text-center leading-tight">
              Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
            </h1>
            <p className="mt-4 text-gray-200 text-center leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
            </p>
          </div>
          <div className="w-full p-8 mr-0 bg-gray-700 border border-gray-500 rounded lg:w-auto lg:mr-4">
            <h2 className="text-2xl mb-6 block">Inscreva-se gratuitamente</h2>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
              <Input type="text" placeholder="Seu nome completo" required={true} onChange={e => setName(e.target.value)} />
              <Input type="email" placeholder="Digite seu e-mail" required={true} onChange={e => setEmail(e.target.value)} />
              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:pointer-events-none disabled:bg-green-700 disabled:opacity-50"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>
        
        <img src="src/assets/bc-code.png" alt="Code editor under floating icons" className="px-2" />
      </div>

      <div className="mx-6">
        <Footer />
      </div>
    </div>
  )
}
