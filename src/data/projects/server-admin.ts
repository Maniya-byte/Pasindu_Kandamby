// ============================================================
// SERVER ADMINISTRATION PROJECTS
// — Add new projects by copying a block and updating fields.
// — Images go in: src/assets/projects/
// ============================================================

import type { ProjectEntry } from "./types";

const projects: ProjectEntry[] = [
  {
    number: 1,
    title: "Windows Server Active Directory",
    description:
      "Set up and managed Active Directory Domain Services for an organization with 300+ users, including GPO management and DNS/DHCP configuration.",
    image: "",
    tags: ["Windows Server", "AD DS", "GPO"],
    link: "#",
  },
  {
    number: 2,
    title: "Linux Server Hardening",
    description:
      "Implemented security hardening on Ubuntu and CentOS servers including SSH key-based auth, fail2ban, and automated patching.",
    image: "",
    tags: ["Linux", "Security", "Automation"],
    link: "#",
  },
  // --- ADD MORE PROJECTS BELOW ---
];

export default projects;
