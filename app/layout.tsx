import '@/styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='eng'>
      <body>
        <Provider session={null}>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;