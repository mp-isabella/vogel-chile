const BASE = '/images'

export const IMAGES = {
  hero: {
    main:       `${BASE}/hero/hero-main.jpg`,
    secondary:  `${BASE}/hero/hero-secondary.jpg`,
  },
  services: {
    consulting:     `${BASE}/services/consulting.jpg`,
    engineering:    `${BASE}/services/engineering.jpg`,
    infrastructure: `${BASE}/services/infrastructure.jpg`,
    technology:     `${BASE}/services/technology.jpg`,
  },
  projects: {
    project1: `${BASE}/projects/project-01.jpg`,
    project2: `${BASE}/projects/project-02.jpg`,
    project3: `${BASE}/projects/project-03.jpg`,
    project4: `${BASE}/projects/project-04.jpg`,
  },
  backgrounds: {
    grid:    `${BASE}/backgrounds/grid-pattern.svg`,
    dots:    `${BASE}/backgrounds/dots-pattern.svg`,
    circuit: `${BASE}/backgrounds/circuit-pattern.svg`,
  },
} as const

export const LOGOS = {
  vogel:     '/logos/vogel.svg',
  vogelMark: '/logos/vogel-mark.svg',
} as const

// Placeholder dimensions for use with next/image
export const IMAGE_SIZES = {
  hero:    { width: 1440, height: 900 },
  card:    { width: 800,  height: 600 },
  thumb:   { width: 400,  height: 300 },
  square:  { width: 600,  height: 600 },
} as const
