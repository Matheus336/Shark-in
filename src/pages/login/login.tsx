import sinddeximg from "../../assets/sinddex.png";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  console.log(email);
  const [senha, setSenha] = useState("");
  console.log(senha);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-linear-to-r from-white to-gray-300">
      <img src={sinddeximg} alt="Logo do Sinddex" className="w-48 h-48" />
      <h1 className="font-bold text-5xl">Faça seu login:</h1>

      <div className="flex flex-col gap-4 mt-6">
        <div className="flex flex-row gap-4 items-center">
          <p className="text-lg">E-mail: </p>
          <input
            type="text"
            placeholder="E-mail"
            className="border border-gray-400 rounded-md p-2 text-lg w-80"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-row gap-4 items-center">
          <p className="text-lg">Senha: </p>
          <input
            type="password"
            placeholder="Senha"
            className="border border-gray-400 rounded-md p-2 text-lg w-80"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row gap-6 mt-6">
        <button
          className="bg-blue-500 text-white hover:bg-blue-600 text-lg rounded-md border border-blue-700 bg"
          onClick={() => alert(email + "\n" + senha)}
        >
          <span className="m-4">Sign-in</span>
        </button>

        <button
          className="bg-gray-300 text-black hover:bg-gray-400 text-lg rounded-md border border-gray-500"
          onClick={() => alert("Olá!")}
        >
          <span className="m-4">Inscreva-se</span>
        </button>
      </div>
      <p className="text-lg">ou </p>
      <div className="flex flex-row gap-6 ">
        <button
          className="bg-red-500 text-white hover:bg-red-600 text-lg rounded-md border border-red-700"
          onClick={() => alert("Olá!")}
        >
          <span className="m-4 text-white">Logar com Google</span>
        </button>
      </div>
    </div>
  );
}
