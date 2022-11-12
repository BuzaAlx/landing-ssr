import React from "react";
import { NextPage, GetServerSideProps } from "next";
import HomePage from "../src/app/containers/HomePage";
import { getData } from "../src/services/api/api";
import {
  IFact,
  IProject,
  ISlogan,
  ITechnology,
  ITestimonial,
} from "../src/types/components";

function Home(props) {
  return <HomePage {...props} />;
}

export const getServerSideProps = async () => {
  try {
    const testimonials: ITestimonial[] = await getData("testimonials");
    const facts: IFact[] = await getData("facts");
    const technologies: ITechnology[] = await getData("technologies");
    const slogan: ISlogan[] = await getData("slogan");
    const projects: IProject[] = await getData("projects");
    return {
      props: {
        testimonials,
        facts,
        technologies,
        slogan,
        projects,
      },
    };
  } catch (error) {
    console.log("error", { error });
    return null;
  }
};

export default Home;
