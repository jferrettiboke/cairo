import Header from "./header";
import Aside from "./aside";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <div>{children}</div>
      </main>
    </>
  );
}
