import React from "react";
import * as Styled from "./footer.styles";
import SocialLinks from "../SocialLinks/social-links.component";
import { IFooter } from "../../../../types/components";
import { MobileSocialList } from "../../../../consts/lists";
import dayjs from "dayjs";

const Footer: React.FC<IFooter> = () => (
  <Styled.Wrapper>
    <Styled.DropBoxFooter className="drop-box-footer" data-scroll={"Social"}>
      <p className="drop-box-footer-text">
        <a href="mailto:sales.codegeneration@gmail.com">
          sales.codegeneration@gmail.com
        </a>
      </p>
      <Styled.FooterAct>
        <SocialLinks socialList={MobileSocialList} />
      </Styled.FooterAct>
      <p className="drop-box-footer-text">Copyright {dayjs().format("YYYY")}</p>
      <Styled.FooterDis>
        <SocialLinks socialList={MobileSocialList} />
      </Styled.FooterDis>
    </Styled.DropBoxFooter>
  </Styled.Wrapper>
);

export default Footer;
