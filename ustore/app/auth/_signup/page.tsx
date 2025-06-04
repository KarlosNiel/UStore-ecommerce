import { SignupForm } from "@/components/auth/SignupForm";
import { AuthProvider } from "@/context/AuthContext";

export default function SignupPage() {

    return (
        <AuthProvider>
            <SignupForm />
        </AuthProvider>
    )

}