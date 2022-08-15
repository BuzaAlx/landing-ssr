import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";
import { slides } from "../../../img/";
import { IProject, ITechnology } from "../types";
import * as Styled from "../Form.styles";

const ProjectForm: React.FC<{
  project?: IProject | undefined;
  close: Function;
  technologies: ITechnology[];
}> = ({ project, close, technologies }) => {
  const [name, setName] = useState(project?.name || "");

  const [fullDescription, setFullDescription] = useState(
    project?.fullDescription || ""
  );
  const [shortDescription, setShortDescription] = useState(
    project?.shortDescription || ""
  );
  const [countryCode, setCountryCode] = useState(project?.countryCode || "");

  const [link, setLink] = useState(project?.link || "");

  const [showOnHomePage, setShowOnHomePage] = useState(
    project?.showOnHomePage || false
  );

  const [imageFile, setImageFile] = useState(project?.imageFile.id || "");

  const [technologyIds, setTechnologyIds] = useState(
    project?.technologies.map((tech) => tech.id) || []
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProject = {
      name,
      fullDescription,
      shortDescription,
      countryCode,
      link,
      showOnHomePage,
      imageFileId: imageFile,
      technologyIds,
    };

    project
      ? updateAdminData("project", project.id, newProject).then(() => close())
      : createAdminData("project", newProject).then(() => close());
  };

  const getImageId = (id) => {
    setImageFile(id);
  };

  const handleTechChange = (event, id) => {
    if (event.target.checked) {
      setTechnologyIds([...technologyIds, id]);
    }
    if (!event.target.checked) {
      setTechnologyIds(technologyIds.filter((tech) => tech !== id));
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {project ? <h2>Edit Project</h2> : <h2>Create a Project</h2>}
        <Styled.Label>
          <span>Project Name:</span>
          <Styled.AdminTextInput
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </Styled.Label>
        <Styled.Label>
          <span>Full Description:</span>
          <Styled.AdminTextArea
            value={fullDescription}
            onChange={({ target: { value } }) => setFullDescription(value)}
          />
        </Styled.Label>
        <Styled.Label>
          <span>Short Description:</span>
          <Styled.AdminTextArea
            value={shortDescription}
            onChange={({ target: { value } }) => setShortDescription(value)}
          />
        </Styled.Label>
        <Styled.Label>
          <span>Country Code:</span>
          <Styled.AdminTextInput
            type="text"
            value={countryCode}
            onChange={({ target: { value } }) => setCountryCode(value)}
          />
        </Styled.Label>
        <Styled.Label>
          <span>Link:</span>
          <Styled.AdminTextInput
            type="text"
            value={link}
            onChange={({ target: { value } }) => setLink(value)}
          />
        </Styled.Label>

        <>
          <Styled.Row>
            {technologies.map((tech) => (
              <Styled.CheckboxContainer>
                <div>{tech.name}</div>
                <Styled.CheckboxLabel>
                  <input
                    type="checkbox"
                    name="TechOption"
                    checked={technologyIds.some((el) => el === tech.id)}
                    onChange={(event) => handleTechChange(event, tech.id)}
                  />
                  <Styled.CustomCheckbox
                    selected={technologyIds.some((el) => el === tech.id)}
                  >
                    <img src={slides.Check} alt="checkbox" />
                  </Styled.CustomCheckbox>
                </Styled.CheckboxLabel>
              </Styled.CheckboxContainer>
            ))}
          </Styled.Row>
        </>
        <Styled.PicturesWrapper>
          <span>Pictures:</span>
          <Images activeImage={project?.imageFile} getImageId={getImageId} />
        </Styled.PicturesWrapper>
        <Styled.CheckboxContainer>
          <div>Show on page:</div>
          <Styled.CheckboxLabel>
            <input
              type="checkbox"
              checked={showOnHomePage}
              onChange={({ target: { checked } }) => setShowOnHomePage(checked)}
            />
            <Styled.CustomCheckbox selected={showOnHomePage}>
              <img src={slides.Check} alt="checkbox" />
            </Styled.CustomCheckbox>
          </Styled.CheckboxLabel>
        </Styled.CheckboxContainer>
        <Styled.ButtonWrapper>
          <Styled.Button
            type="submit"
            disabled={
              !(
                name &&
                fullDescription &&
                shortDescription &&
                countryCode &&
                link &&
                imageFile
              )
            }
          >
            Save Changes
          </Styled.Button>
          <Styled.Button type="button" onClick={() => close()}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default ProjectForm;
