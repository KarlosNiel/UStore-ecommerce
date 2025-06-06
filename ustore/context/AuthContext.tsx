// src/context/AuthContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/types/User';
import { HeroAlert } from '@/components/alert/HeroAlert';
import { AnimatePresence, motion } from 'framer-motion';

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState<{ title: string, description: string, color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" } | null>(null);
    const [showAlert, setShowAlert] = useState(false);
    const router = useRouter();

    const triggerAlert = (title: string, description: string, color: "default" | "primary" | "secondary" | "success" | "warning" | "danger") => {
        setAlert({ title, description, color });
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 4000);
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const response = await fetch('https://fakestoreapi.com/users');
            const users: User[] = await response.json();

            const foundUser = users.find(user =>
                user.email === email && user.password === password
            );

            if (foundUser) {
                setUser(foundUser);
                localStorage.setItem('user', JSON.stringify(foundUser));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        triggerAlert("Sessão encerrada", "Você foi desconectado com sucesso.", "danger");
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
        loading
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, loading }}>
            {children}
            <AnimatePresence>
                {showAlert && alert && (
                    <motion.div
                        className="fixed top-6 right-6 z-50 px-6 py-3"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <HeroAlert
                            title={alert.title}
                            description={alert.description}
                            color={alert.color}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </AuthContext.Provider>
    );
};



export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};