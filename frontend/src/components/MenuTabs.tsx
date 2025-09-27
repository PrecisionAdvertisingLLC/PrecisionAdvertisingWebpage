// frontend/src/components/MenuTabs.tsx

type Tab = {
  label: string
  href: string
  description: string
}

const tabs: Tab[] = [
  {
    label: 'Create An Ad Tool',
    href: '#',
    description: 'Design and generate ad creatives in seconds',
  },
  {
    label: 'Targeted Ads',
    href: '#',
    description: 'Zero-in on your ideal customer profiles',
  },
  {
    label: 'Register Ad Spaces',
    href: '#',
    description: 'Book premium slots across platforms',
  },
  {
    label: 'Results',
    href: '#',
    description: 'View campaign performance metrics',
  },
  {
    label: 'Account Information',
    href: '#',
    description: 'Manage your billing and profile settings',
  },
]

export default function MenuTabs() {
  return (
    <nav className="menu-tabs">
      <ul>
        {tabs.map((tab) => (
          <li className="menu-item" key={tab.label}>
            <a href={tab.href}>{tab.label}</a>
            <span className="tooltip">{tab.description}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
