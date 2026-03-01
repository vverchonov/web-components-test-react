import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Layout, Menu, Toggle } from '@vverchonov/web-components/react'

const THEME_KEY = 'app-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem(THEME_KEY)
  if (stored === 'dark') return true
  if (stored === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const MENU_ITEMS = [
  { label: 'Home', value: '/', icon: 'home' },
  { label: 'Styles', value: '/styles', icon: 'palette' },
  {
    label: 'Layouts',
    value: 'layouts',
    icon: 'layouts',
    children: [
      { label: 'Layout', value: '/layouts/layout' },
      { label: 'Form Layout', value: '/layouts/form-layout' },
    ],
  },
  {
    label: 'Components',
    value: 'components',
    icon: 'components',
    children: [
      { label: 'Button', value: '/components/button' },
      { label: 'Input', value: '/components/input' },
      { label: 'Toggle', value: '/components/toggle' },
      { label: 'Table', value: '/components/table' },
      { label: 'Menu', value: '/components/menu' },
      { label: 'Modal', value: '/components/modal' },
      { label: 'Tabs', value: '/components/tabs' },
      { label: 'Selector', value: '/components/selector' },
      // { label: 'Dropdown Button', value: '/components/dropdown-button' },
      { label: 'Card', value: '/components/card' },
      { label: 'Radio Group', value: '/components/radio-group' },
    ],
  },
]

export default function AppLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [darkMode])

  return (
    <Layout>
      <div slot="sidebar">
        <Menu
          items={MENU_ITEMS}
          activeValue={location.pathname}
          collapsed
          searchable
          searchPlaceholder="Search..."
          onMenuSelect={(e) => {
            const value = e.detail?.value
            if (value) navigate(value)
          }}
        >
          <svg slot="icon-home" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <svg slot="icon-palette" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
          </svg>
          <svg slot="icon-layouts" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="7" height="18" x="3" y="3" rx="1" />
            <rect width="14" height="18" x="10" y="3" rx="1" />
          </svg>
          <svg slot="icon-components" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
          </svg>
          <Toggle
            slot="bottom"
            label="Dark mode"
            checked={darkMode}
            iconPosition="start"
            onToggleChange={(e) => setDarkMode(e.detail?.checked ?? false)}
          >
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </Toggle>
        </Menu>
      </div>
      <main slot="content" className="min-h-screen bg-[var(--color-surface-elevated)]">
        <div className="p-6 min-h-full max-w-[860px] mx-auto bg-transparent">
          <Outlet />
        </div>
      </main>
    </Layout>
  )
}
