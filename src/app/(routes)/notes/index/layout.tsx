import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "My Notes",
  description: "Generated by NerdBox",
};

export default function NotesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
