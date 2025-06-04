import { LoginForm } from "@/components/auth/LoginForm";
import { AuthProvider } from "@/context/AuthContext";

export default function LoginPage() {
    return (
        < AuthProvider >
            < LoginForm />
        </AuthProvider>

    )

}
