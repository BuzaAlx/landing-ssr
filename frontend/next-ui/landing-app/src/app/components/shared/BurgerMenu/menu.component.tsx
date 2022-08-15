import React from "react";
import * as Styled from "./menu.styles";
import { IMenu } from "../../../../types/components";
import dayjs from "dayjs";
import SocialLinks from "../SocialLinks/social-links.component";
import { MobileSocialList, Nav } from "../../../../consts/lists";
import BurgerIcon from "./burger.icon";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const Menu: React.FC<IMenu> = ({ activeMenu, setMenuState, children }) => {
  const onBurger = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setMenuState(!activeMenu);
  };

  return (
    <Styled.BurgerMenu>
      <Styled.MenuContainer className="menu" onClick={onBurger}>
        <BurgerIcon />
      </Styled.MenuContainer>
      <Styled.DropDown
        className={`drop-down ${activeMenu ? "show-sub-menu" : ""}`}
      >
        <Styled.LgMenu className="lg-menu">{children}</Styled.LgMenu>
        {activeMenu && (
          <Styled.DropBoxContainer>
            <Styled.DropBoxMain>
              {Nav.map((item) => (
                <Link href={item.link} key={uuidv4()}>
                  <p
                    onClick={() => setMenuState(!activeMenu)}
                    className="drop-box-item"
                  >
                    {item.burgerTitle}
                  </p>
                </Link>
              ))}
            </Styled.DropBoxMain>
            <Styled.DropBoxFooter>
              <Styled.DropBoxFooterText>
                <a href="mailto:sales.codegeneration@gmail.com">
                  sales.codegeneration@gmail.com
                </a>
              </Styled.DropBoxFooterText>
              <SocialLinks socialList={MobileSocialList} />
              <Styled.DropBoxFooterText>
                Copyright {dayjs().format("YYYY")}
              </Styled.DropBoxFooterText>
            </Styled.DropBoxFooter>
          </Styled.DropBoxContainer>
        )}
      </Styled.DropDown>
      <Styled.GlobalStyle activeMenu={activeMenu} />
    </Styled.BurgerMenu>
  );
};
export default Menu;
