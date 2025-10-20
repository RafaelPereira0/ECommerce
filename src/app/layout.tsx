import Theme from "@/components/Theme";
import "./globals.css";
import { CartProvider } from "@/stores/CartContext";
import { FilterProvider } from "@/stores/FilterContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <FilterProvider>
            <Theme>
              {children}
            </Theme>
          </FilterProvider>
        </CartProvider>
      </body>
    </html>
  );
}
