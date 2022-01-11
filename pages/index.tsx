import styled from "styled-components";
import IndustrieBox from "@components/IndustrieBox";
import magmetBg from "src/assets/images/magmetBG.jpg";

export default function Home() {
  return (
    <HomepageStyles>
      <IndustrieBox 
        path={"/dkice"}
        title={"Dkice"} 
        content={"Czyszczenie suchym lodem, czyszczenie hydrodynamiczne"}
      />
      <IndustrieBox
        path={"/magmet"}
        title={"Dkice schody & balustrady"}
        content={"Nowocześnie stylizowane ogrodzenia, balustrady, bramy, schody kondygnacyjnych oraz wiele innych konstrukcji metalowych"}
        bgImage={'/magmetBG.jpg'}
      />
    </HomepageStyles>
  )
}

const HomepageStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-top: 8.4rem;
`;
