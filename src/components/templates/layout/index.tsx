import { domAnimation, LazyMotion } from "framer-motion";
import { ReactNode } from "react";

interface Children {
  children: ReactNode[] | JSX.Element;
}

const Layout = ({ children }: Children) => {
  return (
    <LazyMotion features={domAnimation} strict={true}>
      <main className="container flex w-full max-w-full items-center justify-center bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden leading-loose">
          {children}
        </div>
      </main>
    </LazyMotion>
  );
};

export default Layout;
