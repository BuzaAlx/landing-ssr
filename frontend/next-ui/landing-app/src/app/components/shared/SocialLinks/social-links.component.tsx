import React from "react";
import * as Styled from "./social-links.styles";
import { v4 as uuidv4 } from "uuid";
import { ISocial } from "../../../../types/components";
import ReactGA from "react-ga";

const clickSocialLinkEA = (link) => {
  ReactGA.event({
    category: "Social Link",
    action: "clickToSocialLink",
    label: `${link}`,
  });
};

const SocialLinks: React.FC<ISocial> = ({ socialList, fill }) => (
  <Styled.HeaderLinks>
    {socialList &&
      socialList.map((item) => (
        <a
          onClick={() => clickSocialLinkEA(item.link)}
          target="_blank"
          rel="noopener noreferrer"
          href={item.link}
          key={uuidv4()}
        >
          <Styled.SocialWrap>
            <svg
              height={item.height}
              width={item.width}
              viewBox={`0 0 ${item.width} ${item.height}`}
              fill={fill === "white" ? "#0C1033" : "white"}
              xmlns="http://www.w3.org/2000/svg"
            >
              {item.src &&
                item.src.map((data) => (
                  <path
                    key={uuidv4()}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={data.path}
                    fill={
                      fill === "white"
                        ? fill === data.fill
                          ? "inherit"
                          : fill
                        : data.fill
                    }
                  />
                ))}
            </svg>
          </Styled.SocialWrap>
        </a>
      ))}
  </Styled.HeaderLinks>
);

export default SocialLinks;
