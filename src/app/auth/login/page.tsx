// import { FaLock } from "react-icons/fa";

import { SignInButton } from "@/domain/auth/components/sign-in-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@components/ui/card";
import { Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock />
            <CardTitle className="text-2xl">Inicia Sesión</CardTitle>
          </div>
          <CardDescription>Accede a tu cuenta para continuar</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton className="w-full" />
        </CardContent>
      </Card>
    </div>
  );
}
