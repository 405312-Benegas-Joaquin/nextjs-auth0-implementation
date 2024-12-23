import { signIn } from "@config/auth";
import { Button } from "@components/ui/button";
import { MoveRight } from "lucide-react";

export function SignInButton({ className }: { className?: string }) {
  return (
    <form
      className="flex flex-col gap-4"
      action={async () => {
        "use server";
        await signIn("auth0", { redirectTo: "/" });
      }}
    >
      <Button type="submit" className={className}>
        <MoveRight />
        Inicia Sesión con Auth0
      </Button>
    </form>
  );
}
