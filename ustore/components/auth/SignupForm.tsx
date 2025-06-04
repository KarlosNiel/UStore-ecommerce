// src/components/auth/SignupForm.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Form,
    Input,
    Button,
    Select,
    SelectItem,
    Checkbox,
    Link,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from "@heroui/react";

export const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: 'br',
        terms: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Limpa erro quando o usuário começa a digitar
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const getPasswordError = (value: string) => {
        if (value.length < 4) {
            return "A senha deve ter pelo menos 4 caracteres";
        }
        if (!/[A-Z]/.test(value)) {
            return "A senha precisa de pelo menos 1 letra maiúscula";
        }
        if (!/[^a-zA-Z0-9]/.test(value)) {
            return "A senha precisa de pelo menos 1 símbolo";
        }
        return null;
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        // Validação de nome de usuário
        if (formData.username === 'admin') {
            newErrors.username = "Escolha um nome de usuário diferente";
        }

        // Validação de senha
        const passwordError = getPasswordError(formData.password);
        if (passwordError) {
            newErrors.password = passwordError;
        }

        // Confirmação de senha
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "As senhas não coincidem";
        }

        // Aceitação dos termos
        if (!formData.terms) {
            newErrors.terms = "Por favor, aceite os termos e condições";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            // Simulação de cadastro na FakeStoreAPI
            const response = await fetch('https://fakestoreapi.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    username: formData.username,
                    password: formData.password,
                })
            });

            if (response.ok) {
                router.push('/auth/login');
            } else {
                setErrors({ form: 'Erro ao criar conta. Tente novamente.' });
            }
        } catch (err) {
            setErrors({ form: 'Ocorreu um erro ao tentar cadastrar. Tente novamente.' });
        } finally {
            setLoading(false);
        }
    };

    
    return (
        <Card className="max-w-md mx-auto p-6 mb-10 shadow-lg ">
            <CardHeader className="text-cente flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">Criar Conta</h2>
                <p className="text-gray-600 mb-2    ">
                    Preencha os campos abaixo para criar sua conta.
                </p>
            </CardHeader>
            <Form
                className="w-full justify-center items-center space-y-2"
                onSubmit={handleSubmit}
            >
                <CardBody className="flex flex-col gap-4">
                    <Input
                        isRequired
                        errorMessage={errors.username}
                        isInvalid={!!errors.username}
                        label="Nome de Usuário"
                        labelPlacement="outside"
                        name="username"
                        placeholder="Escolha um nome de usuário"
                        value={formData.username}
                        onValueChange={(value) => handleChange('username', value)}
                    />

                    <Input
                        isRequired
                        errorMessage={errors.email}
                        isInvalid={!!errors.email}
                        label="Email"
                        labelPlacement="outside"
                        name="email"
                        placeholder="seu@email.com"
                        type="email"
                        value={formData.email}
                        onValueChange={(value) => handleChange('email', value)}
                    />

                    <Input
                        isRequired
                        errorMessage={errors.password}
                        isInvalid={!!errors.password}
                        label="Senha"
                        labelPlacement="outside"
                        name="password"
                        placeholder="••••••••"
                        type="password"
                        value={formData.password}
                        onValueChange={(value) => handleChange('password', value)}
                    />

                    <Input
                        isRequired
                        errorMessage={errors.confirmPassword}
                        isInvalid={!!errors.confirmPassword}
                        label="Confirmar Senha"
                        labelPlacement="outside"
                        name="confirmPassword"
                        placeholder="••••••••"
                        type="password"
                        value={formData.confirmPassword}
                        onValueChange={(value) => handleChange('confirmPassword', value)}
                    />

                    <Select
                        isRequired
                        label="País"
                        labelPlacement="outside"
                        name="country"
                        placeholder="Selecione seu país"
                        selectedKeys={[formData.country]}
                        onSelectionChange={(keys) =>
                            handleChange('country', Array.from(keys)[0] as string)
                        }
                    >
                        <SelectItem key="br">Brasil</SelectItem>
                        <SelectItem key="ar">Argentina</SelectItem>
                        <SelectItem key="us">Estados Unidos</SelectItem>
                        <SelectItem key="ca">Canadá</SelectItem>
                        <SelectItem key="uk">Reino Unido</SelectItem>
                        <SelectItem key="au">Austrália</SelectItem>
                    </Select>
                </CardBody>
                
                <CardFooter className="flex flex-col gap-6">
                    <Checkbox
                        isRequired
                        classNames={{
                            label: "text-small",
                        }}
                        name="terms"
                        isSelected={!!formData.terms}
                        onValueChange={(isSelected) => handleChange('terms', isSelected)}
                        isInvalid={!!errors.terms}
                    >

                        Eu concordo com os termos e condições
                    </Checkbox>

                    {errors.terms && (
                        <div className="text-danger text-small">
                            {errors.terms}
                        </div>
                    )}

                    {errors.form && (
                        <div className="text-danger text-small">
                            {errors.form}
                        </div>
                    )}

                    <Button
                        type="submit"
                        color="primary"
                        className="w-full"
                        isLoading={loading}
                    >
                        Criar Conta
                    </Button>

                    <div className="text-center text-small">
                        <span className="text-gray-600">Já tem uma conta? </span>
                        <Link
                            href="/auth/login"
                            className="text-primary"
                            onPress={() => router.push('/auth/login')}
                        >
                            Faça login
                        </Link>
                    </div>
                </CardFooter>
            </Form >
        </Card>
    );
};