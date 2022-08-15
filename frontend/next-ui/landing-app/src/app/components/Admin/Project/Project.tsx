import ItemButtons from "../ItemButtons/ItemButtons";
import * as Styled from "../Item.styles";
import { IProject } from "../types";

const Projects: React.FC<{
  project: IProject;
  openModal: Function;
  deleteItem: Function;
}> = ({ project, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <Styled.List>
          <Styled.ListItem>
            <span>Name: </span>
            <span>{project.name}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Full Description:</span>
            <span>{project.fullDescription}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Short Description:</span>
            <span>{project.shortDescription}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Country Code:</span>
            <span>{project.countryCode}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Link:</span>
            <span>{project.link}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Technologies:</span>
            <ul>
              {project.technologies.map((tech) => (
                <li>{tech.name}</li>
              ))}
            </ul>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Show on HomePage:</span>
            {project.showOnHomePage ? "true" : "false"}
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Picture:</span>
            <Styled.Image
              src={project.imageFile.s3FileUrl}
              alt={project.imageFile.s3FileUrl}
            />
          </Styled.ListItem>
        </Styled.List>
      </Styled.Item>
      <ItemButtons
        deleteItem={() => deleteItem("project", project.id)}
        openModal={openModal}
        item={project}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default Projects;
