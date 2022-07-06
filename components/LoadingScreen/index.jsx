import dynamic from "next/dynamic";
import { Suspense } from "react";
import Background from "./Background";

const ContentComponent = dynamic(() => import("./Content"), {
  suspense: true,
});

const LoadingScreen = () => {
  return (
    <>
      <div className="fixed w-full h-full bg-zinc-900">
        <Background />
        <Suspense>
          <ContentComponent />
        </Suspense>
      </div>
    </>
  );
};

export default LoadingScreen;
