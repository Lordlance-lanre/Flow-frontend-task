import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from './redux/Provider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <AppRouterCacheProvider>
          <ReduxProvider>

            {children}
          </ReduxProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
