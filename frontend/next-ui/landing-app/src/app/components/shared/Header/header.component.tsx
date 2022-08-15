import React from "react";
import * as Styled from "./header.styles";
import Categories from "../Categories/categories.component";
import SocialLinks from "../SocialLinks/social-links.component";
import Menu from "../BurgerMenu/menu.component";
import { IHeader } from "../../../../types/components";
import IMAGES from "../../../../consts/Images";

const Header: React.FC<IHeader> = ({ socialList, navigation, fill }) => {
  const [activeMenu, setMenuState] = React.useState(false);

  return (
    <React.Fragment>
      <Styled.HeaderWrapper>
        <Styled.HeaderItem>
          <a href="/">
            <Styled.HeaderLogo src={IMAGES.LOGO} />
          </a>
        </Styled.HeaderItem>
        <Menu activeMenu={activeMenu} setMenuState={setMenuState}>
          <Categories navigation={navigation} />
          <SocialLinks socialList={socialList} fill={fill} />
        </Menu>
      </Styled.HeaderWrapper>
    </React.Fragment>
  );
};

Header.defaultProps = {
  fill: "#0C1033",
};

export default Header;
