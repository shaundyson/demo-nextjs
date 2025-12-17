"use server";
import { headers } from "next/headers";
import { hostname } from "os";

export async function getHostname() {
  headers();
  return hostname() || "not known";
}
