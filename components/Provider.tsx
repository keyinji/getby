'use client';

import { SessionProvider } from "next-auth/react";

interface Props {
    children: React.ReactNode;
  }

const Provider: React.FC<Props> = ({ children, session }: any) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;