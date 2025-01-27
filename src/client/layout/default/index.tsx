import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
