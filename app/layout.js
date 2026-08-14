export const metadata = {
  title: 'Simple Radio PWA',
  description: 'Ο ραδιοφωνικός σου σταθμός παντού',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Simple Radio',
  },
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
