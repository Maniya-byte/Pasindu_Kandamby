// ============================================================
// CATEGORIES — Edit this file to add/remove/rename categories.
// ============================================================

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
}

export const categories: Category[] = [
  {
    id: "routing-switching",
    name: "Routing & Switching",
    description: "Network routing, switching, and infrastructure projects",
    icon: "Network",
  },
  {
    id: "server-admin",
    name: "Server Administration",
    description: "Server setup, management, and virtualization projects",
    icon: "Server",
  },
  {
    id: "firewall-admin",
    name: "Firewall Administration",
    description: "Firewall configuration, security policies, and threat management",
    icon: "Shield",
  },
];
