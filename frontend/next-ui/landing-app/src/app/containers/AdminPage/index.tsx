import { useState, useEffect } from "react";
import {
  getAdminData,
  login,
  deleteAdminData,
} from "../../../services/api/adminApi";
import axios from "axios";
import * as Styled from "../../components/Admin/Admin.styles";
import Fact from "../../components/Admin/Facts/Facts";
import Slogan from "../../components/Admin/Slogan/Slogan";
import Worker from "../../components/Admin/Worker/Worker";
import FactsForm from "app/components/Admin/Facts/FactsForm";
import {
  ISlogan,
  IFact,
  IProject,
  IWorker,
  ITechnology,
  ITestimonial,
  IFeaturedTechnology,
  IArticle,
} from "app/components/Admin/types";
import SloganForm from "app/components/Admin/Slogan/SloganForm";
import WorkerForm from "app/components/Admin/Worker/WorkerForm";
import Projects from "app/components/Admin/Project/Project";
import ProjectForm from "../../components/Admin/Project/ProjectForm";
import Technology from "../../components/Admin/Technology/Technology";
import TechnologyForm from "../../components/Admin/Technology/TechnologyForm";
import Testimonial from "app/components/Admin/Testimonial/Testimonial";
import FeaturedTechology from "app/components/Admin/FeaturedTechnology/FeaturedTechnology";
import Article from "../../components/Admin/Article/Article";
import FeaturedTechologyForm from "app/components/Admin/FeaturedTechnology/FeaturedTechnologyForm";
import TestimonialForm from "app/components/Admin/Testimonial/TestimonialForm";
import ArticleForm from "app/components/Admin/Article/ArticleForm";
import ImagesPage from "app/components/Admin/ImagesPage/ImagesPage";
import IMAGES from "consts/Images";
import Footer from "app/components/shared/Footer/footer.component";
import SectionLayout from "app/components/Admin/SectionLayout/sectionLayout.component";
import { AdminNav } from "../../../consts/lists";

const AdminPage: React.FC = () => {
  const [token, setToken] = useState("");
  const [slogan, setSlogan] = useState<ISlogan[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [workers, setWorkers] = useState<IWorker[]>([]);
  const [facts, setFacts] = useState<IFact[]>([]);
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [featuredTechnologies, setFeaturedTechnologies] = useState<
    IFeaturedTechnology[]
  >([]);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isModal, setIsModal] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState<string | any>(null);
  const [editItem, seteditItem] = useState<any>(null);

  useEffect(() => {
    const tokenfromLocalStorage = localStorage.getItem("token");
    const token = tokenfromLocalStorage
      ? JSON.parse(tokenfromLocalStorage)
      : null;
    if (token) {
      setToken(token);
    } else {
      login().then((token) => {
        localStorage.setItem("token", JSON.stringify(token));
        setToken(token);
      });
    }
  }, []);

  useEffect(() => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    if (token) {
      loadData();
    }
  }, [token]);

  useEffect(() => {
    loadData(categoryOpen);
  }, [isModal]);

  const loadData = async (data = "all") => {
    switch (data) {
      case "facts":
        const facts = await getAdminData("facts");
        setFacts(facts);
        break;
      case "slogan":
        const slogan = await getAdminData("slogan");
        setSlogan(slogan);
        break;
      case "worker":
        const workers = await getAdminData("worker");
        setWorkers(workers);
        break;
      case "project":
        const projects = await getAdminData("project");
        setProjects(projects);
        break;
      case "testimonial":
        const testimonials = await getAdminData("testimonial");
        setTestimonials(testimonials);
        break;
      case "technology":
        const technologies = await getAdminData("technology");
        setTechnologies(technologies);
        break;
      case "featuredTechnology":
        const featuredTechnologies = await getAdminData("featuredTechnology");
        setFeaturedTechnologies(featuredTechnologies);
        break;
      case "article":
        const articles = await getAdminData("article");
        setArticles(articles);
        break;
      default:
        getAllData();
        break;
    }
  };

  const getAllData = async () => {
    const facts = await getAdminData("facts");
    setFacts(facts);
    const slogan = await getAdminData("slogan");
    setSlogan(slogan);
    const workers = await getAdminData("worker");
    setWorkers(workers);
    const projects = await getAdminData("project");
    setProjects(projects);
    const testimonials = await getAdminData("testimonial");
    setTestimonials(testimonials);
    const technologies = await getAdminData("technology");
    setTechnologies(technologies);
    const featuredTechnologies = await getAdminData("featuredTechnology");
    setFeaturedTechnologies(featuredTechnologies);
    const articles = await getAdminData("article");
    setArticles(articles);
  };

  const deleteItem = (route: string, id: string) => {
    deleteAdminData(route, id).then(() => loadData(route));
  };

  const handleOpenMenu = (event) => {
    setIsModal(false);
    const id = event.target.id;
    setCategoryOpen(id);
  };

  const openModal = (id: string): void => {
    setIsModal(true);
    seteditItem(id);
  };

  const closeModal = () => {
    setIsModal(false);
    seteditItem(null);
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.HeaderWrapper>
          <Styled.HeaderItem>
            <a href="/">
              <Styled.HeaderLogo src={IMAGES.LOGO} />
            </a>
          </Styled.HeaderItem>
          <Styled.HeaderItem>
            <h2> Admin Page</h2>
          </Styled.HeaderItem>
        </Styled.HeaderWrapper>
        <Styled.Sidebar>
          <Styled.Menu>
            <h3>Items</h3>
            <Styled.MenuList>
              {AdminNav.map(({ id, name }) => (
                <Styled.MenuListItem
                  id={id}
                  onClick={(event) => handleOpenMenu(event)}
                  active={categoryOpen === id}
                >
                  {name}
                </Styled.MenuListItem>
              ))}
            </Styled.MenuList>
          </Styled.Menu>
        </Styled.Sidebar>

        <Styled.InfoWrapper>
          {isModal && categoryOpen === "facts" && (
            <FactsForm fact={editItem} close={closeModal} />
          )}

          {categoryOpen === "facts" && facts && !isModal && (
            <SectionLayout title="Fact" setIsModal={setIsModal}>
              {facts.map((fact) => (
                <Fact
                  fact={fact}
                  openModal={openModal}
                  deleteItem={deleteItem}
                ></Fact>
              ))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "slogan" && (
            <SloganForm slogan={editItem} close={closeModal} />
          )}

          {categoryOpen === "slogan" && slogan && !isModal && (
            <SectionLayout title="Slogan" setIsModal={setIsModal}>
              {slogan.map((slogan) => (
                <Slogan
                  slogan={slogan}
                  openModal={openModal}
                  deleteItem={deleteItem}
                ></Slogan>
              ))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "worker" && (
            <WorkerForm worker={editItem} close={closeModal} />
          )}

          {categoryOpen === "worker" && workers && !isModal && (
            <SectionLayout title="Workers" setIsModal={setIsModal}>
              {workers.map((worker) => (
                <Worker
                  openModal={openModal}
                  worker={worker}
                  deleteItem={deleteItem}
                ></Worker>
              ))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "project" && (
            <ProjectForm
              project={editItem}
              technologies={technologies}
              close={closeModal}
            />
          )}

          {categoryOpen === "project" && projects && !isModal && (
            <SectionLayout title="Projects" setIsModal={setIsModal}>
              {projects.map((project) => (
                <Projects
                  openModal={openModal}
                  project={project}
                  deleteItem={deleteItem}
                ></Projects>
              ))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "testimonial" && (
            <TestimonialForm testimonial={editItem} close={closeModal} />
          )}

          {categoryOpen === "testimonial" && testimonials && !isModal && (
            <SectionLayout title="Testimonials" setIsModal={setIsModal}>
              {testimonials.map((testimonial) => (
                <Testimonial
                  openModal={openModal}
                  testimonial={testimonial}
                  deleteItem={deleteItem}
                ></Testimonial>
              ))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "technology" && (
            <TechnologyForm technology={editItem} close={closeModal} />
          )}

          {categoryOpen === "technology" && technologies && !isModal && (
            <SectionLayout title="Technologies" setIsModal={setIsModal}>
              {technologies.map((technology) => (
                <Technology
                  openModal={openModal}
                  technology={technology}
                  deleteItem={deleteItem}
                ></Technology>
              ))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "article" && (
            <ArticleForm article={editItem} close={closeModal} />
          )}

          {categoryOpen === "article" && articles && !isModal && (
            <SectionLayout title="Article" setIsModal={setIsModal}>
              {articles.map((article) => (
                <Article
                  openModal={openModal}
                  article={article}
                  deleteItem={deleteItem}
                ></Article>
              ))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "featuredTechnology" && (
            <FeaturedTechologyForm
              featuredTechnology={editItem}
              close={closeModal}
            />
          )}

          {categoryOpen === "featuredTechnology" &&
            featuredTechnologies &&
            !isModal && (
              <SectionLayout
                title="Featured Techologies"
                setIsModal={setIsModal}
              >
                {featuredTechnologies.map((featuredTechnology) => (
                  <FeaturedTechology
                    openModal={openModal}
                    featuredTechnology={featuredTechnology}
                    deleteItem={deleteItem}
                  ></FeaturedTechology>
                ))}
              </SectionLayout>
            )}

          {categoryOpen === "images" && <ImagesPage></ImagesPage>}
        </Styled.InfoWrapper>
      </Styled.ContentWrapper>
      <Footer />
    </Styled.Wrapper>
  );
};

export default AdminPage;
