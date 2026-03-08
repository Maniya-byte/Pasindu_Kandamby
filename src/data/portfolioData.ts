// ============================================================
// CENTRAL INDEX — aggregates all category files into one list.
// You should NOT need to edit this file.
// Edit individual category files in src/data/projects/ instead.
// ============================================================

export type { ProjectEntry } from "./projects/types";
export { categories, type Category } from "./categories";
export { profileData } from "./profile";

import { categories } from "./categories";
import type { ProjectEntry } from "./projects/types";

import routingSwitching from "./projects/routing-switching";
import serverAdmin from "./projects/server-admin";
import firewallAdmin from "./projects/firewall-admin";

// Full project type used by components
export interface Project {
  id: string;
  number: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
  projectFile?: string;
}

// Map category id → raw entries
const categoryProjects: Record<string, ProjectEntry[]> = {
  "routing-switching": routingSwitching,
  "server-admin": serverAdmin,
  "firewall-admin": firewallAdmin,
};

// Build flat project list with generated ids
export const projects: Project[] = Object.entries(categoryProjects).flatMap(
  ([categoryId, entries]) =>
    entries.map((entry, idx) => ({
      id: `${categoryId}-${idx + 1}`,
      number: entry.number,
      title: entry.title,
      description: entry.description,
      category: categoryId,
      image: entry.image
        ? new URL(`../assets/projects/${entry.image}`, import.meta.url).href
        : "",
      tags: entry.tags,
      link: entry.link,
      projectFile: entry.projectFile,
    }))
);
