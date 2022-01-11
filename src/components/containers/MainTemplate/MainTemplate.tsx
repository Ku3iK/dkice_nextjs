const MainTemplate: React.FunctionComponent = ({
  children,
}: any) => {
  return (
    <>
      <nav>nav</nav>
        <main>
            {children}
        </main>
      <footer>footer</footer>
    </>
  );
};

export default MainTemplate;