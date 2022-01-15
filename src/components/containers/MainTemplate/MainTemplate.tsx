import Nav from "@components/Nav";
import Container from "../Container/Container";

const MainTemplate: React.FunctionComponent = ({
  children,
}: any) => {
  return (
    <>
      <Nav />
        <main>
          <Container>
              {children}
          </Container>
        </main>
      <footer>footer</footer>
    </>
  );
};

export default MainTemplate;