import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ICategories } from "../../../../types/components/index";
import { NavLink } from "../NavLink/NavLink";
import * as Styled from "./header.styles";

const Categories: React.FC<ICategories> = ({ navigation }) => (
  <Styled.NavContainer>
    {navigation &&
      navigation.map((item) => (
        <div key={uuidv4()} className="small-margin">
          <NavLink href={item.link}>
            <a>
              <div>{item.title}</div>
            </a>
          </NavLink>
        </div>
      ))}
  </Styled.NavContainer>
);

export default Categories;
