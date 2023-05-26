"use client";

import { Provider } from "jotai";
import { ChildrenProps } from "~models";

export default function ProviderWrapper({ children }: ChildrenProps) {
  return <Provider>{children}</Provider>;
}
