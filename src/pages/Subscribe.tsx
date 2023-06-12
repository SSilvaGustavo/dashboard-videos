import { gql, useMutation, useQuery } from "@apollo/client";
import { useState, FormEvent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import Lottie from "lottie-react";
import animationData from "../assets/video-animation.json";
import { EnvelopeSimple, User } from "phosphor-react";
import { AppContext } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CheckEmailQuery {
  subscribers: {
    id: string;
    name: string;
  }[];
}

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

const CHECK_EMAIL_EXISTS_QUERY = gql`
  query CheckEmailExists($email: String!) {
    subscribers(where: { email: $email }, stage: DRAFT) {
      id
      name
    }
  }
`;

export function Subscribe() {
  const { isMobile } = useContext(AppContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const [firstName] = name.split(" ");

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  const { data: emailData } = useQuery<CheckEmailQuery>(
    CHECK_EMAIL_EXISTS_QUERY,
    {
      variables: { email },
    }
  );

  useEffect(() => {
    if (emailData && emailData.subscribers) {
      setEmailExists(emailData.subscribers.length > 0);
    }
  }, [emailData]);

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    try {
      if (emailExists && emailData?.subscribers[0].name === name) {
        toast.success(`Bem vindo(a) de volta ${firstName}!`);
        return setTimeout(() => {
          navigate("/event");
        }, 2000);
      }

      if (emailExists && emailData?.subscribers[0].name !== name) {
        toast.error("Nome invalido, por favor tente novamente!");
      }

      if (!emailExists) {
        await createSubscriber({
          variables: {
            name,
            email,
          },
        });

        toast.success(`Usuário criado com sucesso, bem vindo(a) ${firstName}!`);
        setTimeout(() => {
          navigate("/event");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro inesperado, tente novamente mais tarde!");
    }
  }

  function formattedName(fullName: string) {
    fullName.trim();
    const formattedName = fullName
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
      .join(" ");
    return formattedName;
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center justify-center">
      <div className="w-full max-w-[1440px] mx-auto flex items-center gap-24 max-lg:flex-col max-lg:p-8">
        <div className="lg:w-1/2 flex flex-col">
          <Logo className="h-auto w-64 mb-8 animate-[fade-in-forward_0.5s_ease-in-out_both_0.5s]" />
          <h2 className="tracking-tight text-2xl mb-4 animate-[fade-in-forward_0.5s_ease-in-out_both_0.8s]">
            Explore um mundo de aprendizado através do nosso{" "}
            <strong className="text-teal-500">dashboard</strong> intuitivo e
            interativo
          </h2>
          <p className="tracking-tight animate-[fade-in-forward_0.5s_ease-in-out_both_1s]">
            Conquiste novas{" "}
            <strong className="text-teal-500">habilidades</strong> através do
            nosso dashboard de aulas, projetado para impulsionar seu aprendizado
            em <strong className="text-teal-500">REACT</strong> e
            desenvolvimento pessoal
          </p>
          {!isMobile && (
            <Lottie
              animationData={animationData}
              className="h-auto w-[40rem] animate-[fade-in-forward_0.5s_ease-in-out_both_1.8s]"
            />
          )}
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded-md animate-[fade-in-forward_0.5s_ease-in-out_both_1.2s]">
          <strong className="text-2xl mb-6 block animate-[fade-in-forward_0.5s_ease-in-out_both_1.3s]">
            Garanta suas aulas gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-7 w-full"
          >
            <div className="grid">
              <span className="text-base mb-2 animate-[fade-in-forward_0.5s_ease-in-out_both_1.5s]">
                Seu Nome
              </span>
              <label className="flex items-center gap-3 h-14 py-4 px-3 rounded bg-gray-900 w-full focus-within:ring-2 ring-teal-600  animate-[fade-in-forward_0.5s_ease-in-out_both_1.6s]">
                <User className="w-6 h-6 text-gray-400" />
                <input
                  className="bg-transparent flex-1 text-gray-100 placeholder:text-gray-450 outline-none"
                  type="text"
                  placeholder="Seu nome completo"
                  required
                  onChange={(event) =>
                    setName(formattedName(event.target.value))
                  }
                />
              </label>
            </div>
            <div className="grid">
              <span className="text-base mb-2  animate-[fade-in-forward_0.5s_ease-in-out_both_1.7s]">
                Endereço de e-mail
              </span>
              <label className="flex items-center gap-3 h-14 py-4 px-3 rounded bg-gray-900 w-full focus-within:ring-2 ring-teal-600 animate-[fade-in-forward_0.5s_ease-in-out_both_1.8s]">
                <EnvelopeSimple className="w-6 h-6 text-gray-400" />
                <input
                  className="bg-transparent flex-1 text-gray-100 placeholder:text-gray-450 outline-none"
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                  onChange={(event) =>
                    setEmail(event.target.value.trim().toLowerCase())
                  }
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-teal-600 uppercase py-4 rounded font-bold hover:bg-teal-700 transition-colors disabled:opacity-50 animate-[fade-in-forward_0.5s_ease-in-out_both_2.2s]"
            >
              Acessar aulas
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
