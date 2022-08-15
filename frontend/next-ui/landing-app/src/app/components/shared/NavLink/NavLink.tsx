import React, { Children } from "react";
import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { Item, ActiveItem } from "./NavLink.style";

type NavLinkProps = React.PropsWithChildren<LinkProps> & {
  activeClassName?: string;
  notActiveClassName?: string;
};

export const NavLink = ({
  children,
  activeClassName = "active-item",
  notActiveClassName = "item",
  ...props
}: NavLinkProps) => {
  const { asPath } = useRouter();

  const child = Children.only(children) as React.ReactElement;

  const matchedPath =
    asPath.split("/").indexOf(props.href.toString().substring(1)) === 1;

  const isActive = asPath === props.href || asPath === props.as || matchedPath;

  const Wrapper = isActive ? ActiveItem : Item;

  return (
    <Wrapper>
      <Link {...props}>{React.cloneElement(child)}</Link>
    </Wrapper>
  );
};
