import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

// 2. Configure the UI Sans Font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta', // Creates a CSS variable
});

export const metadata = {
  title: 'Vibe Hatch Code - Spatial Architecture Engine',
  description: 'Turn rough concepts into high-signal engineering specifications.',
  // Tell the browser to use our hatching egg emoji as the official website favicon!
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐣</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable}`}>
      <body className={`${jakarta.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}