import {Search} from "@/components/Search";
import {Repositories} from "@/components/Repositories";
import {Suspense} from "react";

export default function Home() {
  return (
    <main className="container min-h-screen space-y-8 bg-white p-8">
      <Suspense>
        <Search name="query" />
      </Suspense>

      <Suspense>
        <Repositories />
      </Suspense>
    </main>
  );
}
