import { hostname } from "os";

export const dynamic = 'force-dynamic';

export function getHostname(): string {
  return hostname() || "not known";
}