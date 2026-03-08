// ============================================================
// FIREWALL ADMINISTRATION PROJECTS
// — Add new projects by copying a block and updating fields.
// — Images go in: src/assets/projects/
// ============================================================

import type { ProjectEntry } from "./types";

const projects: ProjectEntry[] = [
  {
    number: 1,
    title: "Palo Alto Firewall Deployment",
    description:
      "Configured and deployed Palo Alto next-gen firewalls with App-ID, URL filtering, and threat prevention profiles for a corporate network.",
    image: "",
    tags: ["Palo Alto", "Next-Gen", "Threat Prevention"],
    link: "#",
    projectFile: "#",
  },
  {
    number: 2,
    title: "FortiGate VPN Configuration",
    description:
      "Implemented site-to-site IPSec VPN tunnels using FortiGate firewalls connecting multiple branch offices to headquarters.",
    image: "",
    tags: ["Fortinet", "VPN", "IPSec"],
    link: "#",
    projectFile: "#",
  },
  // --- ADD MORE PROJECTS BELOW ---
];

export default projects;
