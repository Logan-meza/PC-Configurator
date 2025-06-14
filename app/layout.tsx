// app/layout.tsx
import "./globals.css"; // Asegúrate de tener este archivo para estilos globales
import { ReactNode } from "react";

export const metadata = {
  title: "PC Configurator",
  description: "Configura y cotiza tu PC personalizada",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 antialiased min-h-screen">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
