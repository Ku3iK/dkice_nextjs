import Nav from "@components/Nav";
import Container from "../Container/Container";

const MainTemplate: React.FunctionComponent = ({
  children,
}: any) => {
  return (
    <>
      <Nav />
        <Container>
            {children}
        </Container>
      <footer>footer</footer>
    </>
  );
};

export default MainTemplate;