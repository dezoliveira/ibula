import { Suspense } from "react";
import Loading from "../components/elements/Loading";

export default function MedicinePage({ children }) {
  return (
      <section>
        <Suspense fallback={<Loading></Loading>}>
          {children}
        </Suspense>
      </section>
  );
}