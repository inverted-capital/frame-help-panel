import { useEffect } from 'react'
import useAccountData from './hooks/useAccountData.ts'
import useAccountSaver from './hooks/useAccountSaver.ts'
import type { AccountData } from './types/account.ts'
import HelpView from './help/HelpView.tsx'

const defaultProfile: AccountData = { name: '' }

export default function App() {
  const { loading, error } = useAccountData()
  const save = useAccountSaver()

  useEffect(() => {
    if (error === 'profile.json not found') {
      save(defaultProfile)
    }
  }, [error, save])

  if (loading) return <p>Loading...</p>

  return <HelpView />
}
