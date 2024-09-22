import { NavLinks } from '@/app/ui/nav-links'

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {/* Layout UI */}
        <main>{children}</main>
    </div>
  );
}