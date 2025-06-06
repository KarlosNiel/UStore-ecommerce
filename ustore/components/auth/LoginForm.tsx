'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
    Form,
    Input,
    Button,
    Link,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "@heroui/react";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const success = await login(email, password);
            if (success) {
                router.push('/products/');
                router.refresh();
            } else {
                setError('Credenciais inválidas. Por favor, tente novamente.');
            }
        } catch (err) {
            setError('Ocorreu um erro ao tentar fazer login. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const getPasswordError = (value: string) => {
        if (value.length < 4) {
            return "A senha deve ter pelo menos 4 caracteres";
        }
        return null;
    };

    return (
        <Card className="max-w-md mx-auto p-6 mb-14 shadow-lg ">
            <CardHeader className='flex flex-col items-center space-y-2'>
                <h1 className="text-xl font-semibold text-center">Login</h1>
            </CardHeader>

            <Form
                className="w-full justify-center items-center space-y-2"
                onSubmit={handleSubmit}
            >
                <CardBody className="flex flex-col gap-4">
                    <Input
                        isRequired
                        errorMessage={({ validationDetails }) => {
                            if (validationDetails.valueMissing) {
                                return "Por favor, insira esse email: john@gmail.com";
                            }
                            if (validationDetails.typeMismatch) {
                                return "Por favor, insira um email válido: john@gmail.com";
                            }
                        }}
                        label="Email"
                        labelPlacement="outside"
                        name="email"
                        placeholder="john@gmail.com"
                        type="email"
                        value={email}
                        onValueChange={setEmail}
                        description="Digite este email para logar: john@gmail.com"
                    />

                    <Input
                        isRequired
                        label="Senha"
                        labelPlacement="outside"
                        name="password"
                        placeholder="••••••••"
                        type="password"
                        value={password}
                        onValueChange={setPassword}
                        description="Digite esta senha para logar: m38rmF$"
                    />

                    <div className="flex items-center justify-center">
                        <Link
                            href="#"
                            className="text-primary text-small"
                            onPress={() => router.push('/forgot-password')}
                        >
                            Esqueceu a senha?
                        </Link>
                    </div>
                </CardBody>

                <CardFooter className="flex flex-col gap-4">


                    {error && (
                        <div className="text-danger text-small">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        color="primary"
                        className="w-full"
                        isLoading={loading}
                    >
                        Entrar
                    </Button>

                    <div className="text-center text-small">
                        <span className="text-gray-600">Não tem uma conta? </span>
                        <Link
                            href="/auth/signup"
                            className="text-primary"
                            onPress={() => router.push('/signup')}
                        >
                            Cadastre-se
                        </Link>
                    </div>
                </CardFooter>
            </Form>
        </Card>
    );
};