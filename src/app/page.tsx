"use client";

import Background from "@/components/container-background";
import FormContainer from "@/components/container-form";

export default function Home() {
  return (
    <div className="bg-black min-h-screen max-h-[100vh] overflow-hidden relative">
      <Background />
      <FormContainer />
    </div>
  );
}
