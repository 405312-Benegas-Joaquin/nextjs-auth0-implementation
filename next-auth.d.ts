// types/next-auth.d.ts
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

console.log({ Session, JWT });

// Extiende el tipo de la sesión para agregar `accessToken` y `expiresAt`
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    expiresAt?: number;
    audience?: string;
  }
}

// Extiende el tipo de JWT para agregar `accessToken` y `expiresAt`
declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    expiresAt?: number;
    audience?: string;
  }
}
