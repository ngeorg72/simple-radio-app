export const metadata = {
  title: 'Simple Radio',
  description: 'Ζωντανά ο σταθμός σου',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
