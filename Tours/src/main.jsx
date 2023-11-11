import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthProvider} from "@pangeacyber/react-auth"

// Define environment variables
const PANGEA_DOMAIN = import.meta.env.VITE_PUBLIC_PANGEA_DOMAIN;
const AUTHN_CLIENT_TOKEN = import.meta.env.VITE_PUBLIC_AUTHN_CLIENT_TOKEN;
const AUTHN_HOSTED_LOGIN_URL = import.meta.env.VITE_PUBLIC_AUTHN_HOSTED_LOGIN_URL;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider
      loginUrl={AUTHN_HOSTED_LOGIN_URL}
      config={{
        domain:PANGEA_DOMAIN,
        clientToken:AUTHN_CLIENT_TOKEN
      }}
    >
      <App />
    </AuthProvider>

  </React.StrictMode>,
)
