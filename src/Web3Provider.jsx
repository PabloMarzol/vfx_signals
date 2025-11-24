import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID' // User should replace this

// 2. Create wagmiConfig
const metadata = {
    name: 'VFX Signals',
    description: 'VFX Signals Web3 Login',
    url: 'https://vfxsignals.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
})

// 3. Create modal
createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    themeMode: 'dark',
    themeVariables: {
        '--w3m-accent': '#00ff88',
    }
})

export function Web3Provider({ children }) {
    const queryClient = new QueryClient()

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}
