export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Servicios',
    href: '/servicios',
    children: [
      { label: 'Abastecimiento y Suministro',        href: '/servicios/abastecimiento' },
      { label: 'Logística y Operaciones',             href: '/servicios/infraestructura' },
      { label: 'Tecnología e Infraestructura Digital', href: '/servicios/soluciones-tecnologicas' },
      { label: 'Consultoría y Gestión',               href: '/servicios/consultoria' },
      { label: 'Mercado Público',                     href: '/servicios/mercado-publico' },
    ],
  },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros',  href: '/nosotros' }
]
