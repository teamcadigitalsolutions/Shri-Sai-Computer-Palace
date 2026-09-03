/**
 * services.js — All service offerings for Shri Sai Computer Palace
 * Edit this array to customize services for a different client.
 */

export const services = [
  {
    id: 'laptop-sales',
    title: 'Laptops & Computers Sales',
    shortTitle: 'Laptops & PCs',
    icon: '💻',
    description:
      'We provide a wide range of new and certified refurbished laptops, desktops, and all-in-one PCs from top brands like Dell, HP, Lenovo, Asus, and Acer at competitive prices.',
    details: [
      'New and refurbished laptops',
      'Branded desktop computers',
      'Expert advice for the right purchase',
      'Software setup included',
      'Warranty and after-sales support',
    ],
    whatsappMessage: 'Hello, I am looking to buy a new laptop or computer.',
    featured: true,
  },
  {
    id: 'custom-pc-build',
    title: 'Custom Gaming & Workstation PCs',
    shortTitle: 'Custom PCs',
    icon: '⚙️',
    description:
      'High-performance custom PC builds for gaming, video editing, 3D rendering, and professional workloads. We build rigs that match your exact specifications and budget.',
    details: [
      'High-end Gaming PCs',
      'Video editing & workstation builds',
      'Budget-friendly office systems',
      'RGB lighting and custom cooling',
      'Complete assembly and benchmarking',
    ],
    whatsappMessage: 'Hello, I want a custom gaming or workstation PC.',
    featured: true,
  },
  {
    id: 'cctv-installation',
    title: 'CCTV Installation & Maintenance',
    shortTitle: 'CCTV Services',
    icon: '📹',
    description:
      'Complete CCTV security solutions for homes, offices, schools, and commercial spaces. High-definition cameras with mobile-viewing setup and DVR/NVR configuration.',
    details: [
      'HD and IP camera installation',
      'DVR and NVR setup',
      'Mobile view configuration (view from anywhere)',
      'Cable routing and networking',
      'Maintenance and troubleshooting',
    ],
    whatsappMessage: 'Hello, I need help with CCTV installation or maintenance.',
    featured: true,
  },
  {
    id: 'printer-services',
    title: 'Printer Sales & Servicing',
    shortTitle: 'Printers',
    icon: '🖨️',
    description:
      'We sell, install, and repair all types of printers including InkTank, Laser, and all-in-one printers. We also provide ink, toner refills, and networking solutions.',
    details: [
      'New printer sales (HP, Canon, Epson, Brother)',
      'Printer repair and servicing',
      'Ink and toner cartridge refills',
      'Paper jam and roller issues',
      'Wireless printer network setup',
    ],
    whatsappMessage: 'Hello, I need help with a printer (repair/purchase).',
    featured: true,
  },
  {
    id: 'amc-bulk-orders',
    title: 'AMC & Bulk B2B Orders',
    shortTitle: 'AMC & B2B',
    icon: '🏢',
    description:
      'Comprehensive IT solutions for schools, colleges, and offices. We handle bulk orders for computers and offer Annual Maintenance Contracts (AMC) for hassle-free IT support.',
    details: [
      'Bulk laptop/desktop orders',
      'Annual Maintenance Contracts (AMC)',
      'School & college lab setup',
      'Office IT infrastructure',
      'Priority on-site support',
    ],
    whatsappMessage: 'Hello, I am interested in AMC or placing a bulk order for my office/school.',
    featured: true,
  },
  {
    id: 'accessories-peripherals',
    title: 'Accessories & Peripherals',
    shortTitle: 'Accessories',
    icon: '🖱️',
    description:
      'Your one-stop shop for all computer accessories. We stock monitors, keyboards, mice, headphones, routers, cables, external drives, and gaming gear.',
    details: [
      'Monitors (Office and Gaming)',
      'Keyboards and mice (Wireless & Mechanical)',
      'Routers and networking gear',
      'External HDDs and SSDs',
      'Cables, adapters, and power supplies',
    ],
    whatsappMessage: 'Hello, I am looking for computer accessories or peripherals.',
    featured: false,
  },
  {
    id: 'laptop-repair',
    title: 'Laptop Repair',
    shortTitle: 'Laptop Repair',
    icon: '🔧',
    description:
      'Expert laptop repair covering screen replacements, keyboard issues, charging port repair, motherboard servicing, and full diagnostic checks for all major brands.',
    details: [
      'Screen replacement (all sizes)',
      'Keyboard and touchpad repair',
      'Charging port and battery issues',
      'Hinge and casing repair',
      'Motherboard-level diagnostics',
    ],
    whatsappMessage: 'Hello, I need help with laptop repair.',
    featured: true,
  },
  {
    id: 'desktop-repair',
    title: 'Desktop Repair',
    shortTitle: 'Desktop Repair',
    icon: '🖥️',
    description:
      'Complete desktop repair and maintenance — from component replacement to full system rebuilds. We service branded and assembled desktops alike.',
    details: [
      'Component-level fault finding',
      'RAM, HDD/SSD, and GPU replacement',
      'SMPS and power-related repairs',
      'Cooling system servicing',
      'Full system cleaning and tuneup',
    ],
    whatsappMessage: 'Hello, I need help with desktop computer repair.',
    featured: false,
  },
  {
    id: 'hardware-upgrades',
    title: 'Hardware Upgrades (SSD/RAM)',
    shortTitle: 'Upgrades',
    icon: '⚡',
    description:
      'Give your computer a new lease of life with an SSD or RAM upgrade. Dramatically improve speed and responsiveness for gaming or heavy workflows.',
    details: [
      'SSD installation (SATA & NVMe)',
      'RAM expansion and replacement',
      'Graphics card upgrades',
      'Processor and cooling upgrades',
      'Data migration from old HDD to SSD',
    ],
    whatsappMessage: 'Hello, I want to upgrade my computer (SSD/RAM/Graphics).',
    featured: false,
  },
  {
    id: 'windows-installation',
    title: 'OS & Software Installation',
    shortTitle: 'Software',
    icon: '💿',
    description:
      'Fresh Windows installation, reinstallation, and driver setup. We also install and configure essential software, antivirus, and productivity tools.',
    details: [
      'Windows 10 / 11 installation',
      'Driver installation and updates',
      'Antivirus and security software setup',
      'Office and productivity suite installation',
      'System optimization after install',
    ],
    whatsappMessage: 'Hello, I need help with Windows or software installation.',
    featured: false,
  },
  {
    id: 'data-recovery',
    title: 'Data Recovery & Backup',
    shortTitle: 'Data Recovery',
    icon: '📁',
    description:
      'Professional data recovery services for crashed hard drives, accidentally deleted files, and corrupted systems. Secure data backup and transfer solutions.',
    details: [
      'Data recovery from failing HDDs',
      'Accidental deletion recovery',
      'Data backup to external drives',
      'File and folder transfer between systems',
      'Secure formatting and data wiping',
    ],
    whatsappMessage: 'Hello, I need help with data recovery or backup.',
    featured: false,
  },
  {
    id: 'networking',
    title: 'Networking & Wi-Fi Setup',
    shortTitle: 'Networking',
    icon: '🌐',
    description:
      'Network setup, troubleshooting, and connectivity solutions for home and small office setups. Wi-Fi issues, LAN configuration, and router setup.',
    details: [
      'Wi-Fi setup and troubleshooting',
      'LAN and router configuration',
      'Network printer setup',
      'Slow internet diagnosis',
      'Small office network setup',
    ],
    whatsappMessage: 'Hello, I need help with network or internet connectivity.',
    featured: false,
  },
]

export default services
