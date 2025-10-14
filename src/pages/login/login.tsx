import { Button } from "@/components/ui/button";
import sinddeximg from "../../assets/sinddex.png";
import { useState } from "react";
import {Input} from "@/components/ui/input.tsx";

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
            <Input
                type="email"
                placeholder="Email"
                className="border border-gray-400 rounded-md p-2 text-lg w-80"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
        </div>

        <div className="flex flex-row gap-4 items-center">
          <p className="text-lg">Senha: </p>
            <Input
                type="password"
                placeholder="Senha"
                className="border border-gray-400 rounded-md p-2 text-lg w-80"
                onChange={(e) => setSenha(e.target.value)}
                value={senha}
            />
        </div>
      </div>

      <div className="flex flex-row gap-6 mt-6">
        <Button
            variant="default"
            size={"lg"}
            className="bg-sky-600 hover:bg-sky-700"
            onClick={() => alert(email + "\n" + senha)}
        >
          Sign-in
        </Button>

          <Button
              variant="outline"
              size={"lg"}
              onClick={() => alert("Olá!")}
          >
              Inscreva-se
          </Button>
      </div>
      <p className="text-lg">ou </p>
      <div className="flex flex-row gap-6 ">
          <Button
              variant="destructive"
              size={"lg"}
              onClick={() => alert("Olá!")}
          >
              Logar com Google
          </Button>
      </div>
    </div>
  );
}
