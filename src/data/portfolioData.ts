// All portfolio data in one place — easy to swap with a database later.

export interface Project {
  id: string;
  number: number; // number within its category
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
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

export const projects: Project[] = [
  {
    id: "1",
    number: 1,
    title: "Enterprise VLAN Configuration",
    description:
      "Designed and implemented a multi-VLAN architecture for a corporate network with 500+ endpoints, including inter-VLAN routing using Layer 3 switches.",
    category: "routing-switching",
    image: "",
    tags: ["Cisco", "VLAN", "Layer 3"],
    link: "#",
  },
  {
    id: "2",
    number: 2,
    title: "OSPF Network Deployment",
    description:
      "Deployed OSPF routing protocol across a multi-site WAN environment with redundant links and failover configurations.",
    category: "routing-switching",
    image: "",
    tags: ["OSPF", "WAN", "Redundancy"],
    link: "#",
  },
  {
    id: "3",
    number: 1,
    title: "Windows Server Active Directory",
    description:
      "Set up and managed Active Directory Domain Services for an organization with 300+ users, including GPO management and DNS/DHCP configuration.",
    category: "server-admin",
    image: "",
    tags: ["Windows Server", "AD DS", "GPO"],
    link: "#",
  },
  {
    id: "4",
    number: 2,
    title: "Linux Server Hardening",
    description:
      "Implemented security hardening on Ubuntu and CentOS servers including SSH key-based auth, fail2ban, and automated patching.",
    category: "server-admin",
    image: "",
    tags: ["Linux", "Security", "Automation"],
    link: "#",
  },
  {
    id: "5",
    number: 1,
    title: "Palo Alto Firewall Deployment",
    description:
      "Configured and deployed Palo Alto next-gen firewalls with App-ID, URL filtering, and threat prevention profiles for a corporate network.",
    category: "firewall-admin",
    image: "",
    tags: ["Palo Alto", "Next-Gen", "Threat Prevention"],
    link: "#",
  },
  {
    id: "6",
    number: 2,
    title: "FortiGate VPN Configuration",
    description:
      "Implemented site-to-site IPSec VPN tunnels using FortiGate firewalls connecting multiple branch offices to headquarters.",
    category: "firewall-admin",
    image: "",
    tags: ["Fortinet", "VPN", "IPSec"],
    link: "#",
  },
];

export const profileData = {
  name: "Pasindu Kandamby",
  title: "Network & System Administrator",
  bio: "I craft secure network infrastructures and manage enterprise systems. Passionate about cybersecurity, firewall management, and building resilient IT environments.",
  email: "hello@example.com",
  location: "San Francisco, CA",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  },
  skills: ["Cisco", "Palo Alto", "Fortinet", "Windows Server", "Linux", "VMware", "AWS", "Docker", "Python", "Networking"],
  experience: [
    {
      role: "Senior Developer",
      company: "Tech Company",
      period: "2022 – Present",
      description: "Leading frontend architecture and design system development.",
    },
    {
      role: "Full-Stack Developer",
      company: "Startup Inc.",
      period: "2020 – 2022",
      description: "Built and shipped multiple products from concept to production.",
    },
  ],
};
