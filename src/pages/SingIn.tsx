import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import axios from "axios";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";

export function SingIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        axios.post("/api/login", {
            email: "usuario-exemplo@exemple.com",
            password: "123456",
            rememberMe: true,
        });
        setIsUserSignedIn(true);
    }

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-900 text-gray-100">
            <header className="flex flex-col items-center">
                <Logo />

                <Heading size="large" className="mt-4">
                    Ignite Lab
                </Heading>

                <Text size="large" className="mt-1 text-gray-400">
                    Faça login e comece a usar!
                </Text>
            </header>

            <form
                className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-4"
                onSubmit={handleSubmit}
            >
                {isUserSignedIn && <Text>Login realizado!</Text>}

                <label htmlFor="email" className="flex flex-col gap-3">
                    <Text className="font-semibold">Endereço de e-mail</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <EnvelopeIcon />
                        </TextInput.Icon>

                        <TextInput.Element
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                        />
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-3">
                    <Text className="font-semibold">Sua senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <LockClosedIcon />
                        </TextInput.Icon>

                        <TextInput.Element
                            type="password"
                            id="password"
                            placeholder="******"
                        />
                    </TextInput.Root>
                </label>

                <label
                    id="labelRemember"
                    htmlFor="remember"
                    className="flex items-center gap-2"
                >
                    <Checkbox id="remember" aria-labelledby="labelRemember" />
                    <Text size="small" className="text-gray-200">
                        Lembrar de mim por 30 dias
                    </Text>
                </label>

                <Button type="submit" className="mt-4">
                    Entrar na plataforma
                </Button>
            </form>

            <footer className="mt-8 flex flex-col items-center gap-4">
                <Text asChild size="small">
                    <a
                        href=""
                        className="text-gray-400 underline outline-cyan-300 hover:text-gray-200"
                    >
                        Esqueceu sua senha?
                    </a>
                </Text>
                <Text asChild size="small">
                    <a
                        href=""
                        className="text-gray-400 underline outline-cyan-300 hover:text-gray-200"
                    >
                        Não possui conta? Crie uma agora!
                    </a>
                </Text>
            </footer>
        </div>
    );
}
