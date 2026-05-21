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
      { label: 'Soluciones Tecnológicas',       href: '/servicios/soluciones-tecnologicas' },
      { label: 'Infraestructura Digital',        href: '/servicios/infraestructura' },
      { label: 'Consultoría y Soporte',          href: '/servicios/consultoria' },
      { label: 'Abastecimiento y Suministro',    href: '/servicios/abastecimiento' },
      { label: 'Mercado Público y Licitaciones', href: '/servicios/mercado-publico' },
    ],
  },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros',  href: '/nosotros' },
  { label: 'Blog',        href: '/blog' },
]
