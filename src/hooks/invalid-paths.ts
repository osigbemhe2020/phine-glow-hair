"use client";

import { usePathname } from "next/navigation";

export default function useInvalidPaths() {
  const pathName = usePathname();

  const invalidPaths = ["/dashboard"];

  const isInvalid = invalidPaths.some((path) => pathName.includes(path));

  return isInvalid;
}
