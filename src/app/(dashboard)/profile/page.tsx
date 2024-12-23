import PageContainer from "@/common/components/page/app-page-container";
import PageHeader from "@/common/components/page/app-page-header";
import PageContent from "@/common/components/page/app-page.content";
import { auth } from "@config/auth";
import Image from "next/image";
import React from "react";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <PageContainer>
      {/* Header */}
      <PageHeader
        title="Perfil de Usuario"
        description="Administra tu cuenta y personaliza tu experiencia."
      />

      {/* Content */}
      <PageContent className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Avatar */}
        <div className="relative w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden">
          <Image src={session.user.image || ""} alt="User Avatar" layout="fill" objectFit="cover" />
        </div>

        {/* User Information */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {session.user.name || "Nombre de Usuario"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {session.user.email || "user@example.com"}
          </p>

          {/* Details */}
          <div className="mt-6 space-y-4 max-w-sm">
            <div className="flex flex-col md:flex-row justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                Nombre de Usuario:
              </span>
              <span className="text-sm text-gray-800 dark:text-gray-100">
                {session.user.name || "Nombre de Usuario"}
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                Correo electrónico:
              </span>
              <span className="text-sm text-gray-800 dark:text-gray-100">
                {session.user.email || "user@example.com"}
              </span>
            </div>
          </div>
        </div>
      </PageContent>
    </PageContainer>
  );
}
