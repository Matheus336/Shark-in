import { Button } from "@/components/ui/button";
import logo from "../../assets/shark-in.png";
import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

export function Login() {
  const [email, setEmail] = useState("");
  console.log(email);
  const [senha, setSenha] = useState("");
  console.log(senha);

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-linear-to-r from-white to-gray-100">
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-col items-center">
              <img src={logo} alt="Logo do Shark-in" className="w-35 h-35" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <h1 className="font-bold text-4xl mb-6">Faça seu login:</h1>
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
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <div className="flex flex-row gap-6 mt-6">
              <Link to={"/feed"}>
                <Button
                  size={"lg"}
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2"
                >
                  Logar
                </Button>
              </Link>
              <Button
                variant="outline"
                size={"lg"}
                onClick={() => alert("Olá!")}
              >
                Inscreva-se
              </Button>
            </div>
            <p className="text-lg">ou </p>
            <div className="flex flex-row gap-6 mt-2">
              <Button
                variant="destructive"
                size={"lg"}
                onClick={() => alert("Olá!")}
              >
                Logar com Google
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
