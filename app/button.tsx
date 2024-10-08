"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Button({ id }: { id: number }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return <button onClick={() => router.push(`?id=${id}`)}>Go {id}</button>;
}
