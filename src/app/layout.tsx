"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from "next/font/google";
import Script from 'next/script';
import Toast from "../Components/General/Toast"

import store from "../Redux/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
          <Toast />
        </Provider>
    
        <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="" ></Script>
        <Script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossOrigin=""></Script>
        <Script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="" ></Script>
        <Script src="path/to/chartjs/dist/chart.umd.js"></Script>
      </body>
    </html>
  );
}