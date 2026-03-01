import { Button } from '@vverchonov/web-components/react'

const FEATURES = [
  '13 components — Button, Input, Toggle, Table, Menu, Modal, Tabs, Selector, Dropdown Button, Layout, Form Layout, Card, Radio Group',
  'React wrappers via @lit/react — use every component as a native React element',
  'Dark mode — automatic (system preference) and manual (data-theme)',
  'Fully typed — written in TypeScript with exported types for every component',
  'Tree-shakeable — import the entire library or only the components you need',
  'Themeable — override any design token with CSS custom properties',
]

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div
        className="p-5 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
          This website uses <code className="text-[var(--color-text)]">@vverchonov/web-components</code> and{' '}
          <code className="text-[var(--color-text)]">Tailwind v4</code> for styling. It’s a demo of my web components
          library — showcasing skills in Lit, web components, and Tailwind. It doesn’t include every component; rather,
          it reflects what I built in about 5–6 hours to demonstrate efficiency and knowledge.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">@vverchonov/web-components</h1>
        <p className="text-[var(--color-text-muted)]">
          A library of reusable UI components built with Lit 3, shipped as standard web components with first-class React wrappers.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          label="View on npm"
          type="primary"
          iconPosition="start"
          ref={(el) => el && (el.onClick = () => window.open('https://www.npmjs.com/package/@vverchonov/web-components', '_blank', 'noopener,noreferrer'))}
        >
          <svg slot="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h6.666v5.331zm4 0v1.336H8.001V8.667h5.332v1.332h-2.666v2.667h2.666v1.333zm4-1.333v1.333h-2v-1.333h2zM16.001 8.667v5.332h1.334v-4h1.332v4h1.332v-4h1.332v4h1.332V8.667H16.001zm6.668 5.331h-1.334v-4h-1.332v4h-2.666V8.667h5.332v5.331z" />
          </svg>
        </Button>
        <Button
          label="View on GitHub"
          type="secondary"
          iconPosition="start"
          ref={(el) => el && (el.onClick = () => window.open('https://github.com/vverchonov/vverchonov-web-components', '_blank', 'noopener,noreferrer'))}
        >
          <svg slot="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Button>
      </div>

      <div
        className="p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] space-y-4"
      >
        <h2 className="text-lg font-medium text-[var(--color-text)]">Features</h2>
        <ul className="space-y-2 text-[var(--color-text-muted)] text-sm">
          {FEATURES.map((feature, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--color-primary)] mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] space-y-4"
      >
        <h2 className="text-lg font-medium text-[var(--color-text)]">Installation</h2>
        <pre className="p-4 rounded-[var(--radius-input)] bg-[var(--color-surface)] text-[var(--color-text)] text-sm overflow-x-auto">
          <code>npm install @vverchonov/web-components lit</code>
        </pre>
        <p className="text-[var(--color-text-muted)] text-sm">
          Peer dependencies: <code className="text-[var(--color-text)]">lit ^3.0.0</code> (required),{' '}
          <code className="text-[var(--color-text)]">react ^18.0.0 || ^19.0.0</code> (for React wrappers)
        </p>
      </div>

      <div
        className="p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] space-y-4"
      >
        <h2 className="text-lg font-medium text-[var(--color-text)]">Tech stack</h2>
        <p className="text-[var(--color-text-muted)] text-sm">
          Lit 3 · TypeScript 5.9 · Vite 8 · Tailwind CSS 4
        </p>
      </div>

      <p className="text-[var(--color-text-muted)] text-sm">
        Use the sidebar to explore all 13 components and see them in action.
      </p>
    </div>
  )
}
