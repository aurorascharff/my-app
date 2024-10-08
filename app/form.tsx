"use client";

import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

export default function Form() {
  const router = useRouter();
  const [isLoading, startTransition] = useTransition();

  return (
    <form>
      <input
        name="q"
        onChange={(e) => {
          startTransition(() => {
            router.push(`/post?q=${e.target.value}`);
          });
        }}
      />
      {isLoading ? "Loading..." : null}
    </form>
  );
}
