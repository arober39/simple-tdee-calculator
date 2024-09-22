import { NavLinks } from '@/app/ui/nav-links'

export default function AboutLayout({
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