// ============================================================
// ROUTING & SWITCHING PROJECTS
// — Add new projects by copying a block and updating fields.
// — Images go in: src/assets/projects/
// ============================================================

import type { ProjectEntry } from "./types";

const projects: ProjectEntry[] = [
  {
    number: 1,
    title: "Enterprise VLAN Configuration",
    description:
      "Designed and implemented a multi-VLAN architecture for a corporate network with 500+ endpoints, including inter-VLAN routing using Layer 3 switches.",
    image: "",
    tags: ["Cisco", "VLAN", "Layer 3"],
    link: "#",
    projectFile: "#",
  },
  {
    number: 2,
    title: "OSPF Network Deployment",
    description:
      "Deployed OSPF routing protocol across a multi-site WAN environment with redundant links and failover configurations.",
    image: "",
    tags: ["OSPF", "WAN", "Redundancy"],
    link: "#",
    projectFile: "#",
  },
  // --- ADD MORE PROJECTS BELOW ---
];

export default projects;
