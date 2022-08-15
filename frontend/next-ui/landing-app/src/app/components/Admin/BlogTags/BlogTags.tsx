import { useEffect, useState } from "react";
import {
  createAdminData,
  deleteAdminData,
  getAdminData,
} from "services/api/adminApi";
import { ITag } from "../types";
import * as Styled from "../Form.styles";
import { slides } from "../../../img/";

const BlogTags: React.FC<{ currentTags: ITag[]; getTags: Function }> = ({
  currentTags,
  getTags,
}) => {
  const [tags, setTags] = useState<ITag[]>([]);
  const [tagIds, setTagIds] = useState(currentTags?.map((el) => el.id) || []);
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    getAllTags();
  }, []);

  useEffect(() => {
    getTags(tagIds);
  }, [tagIds]);

  const getAllTags = async () => {
    const tags = await getAdminData("blogTag");
    setTags(tags);
  };

  const addTag = async () => {
    createAdminData("blogTag", { name: newTag }).then(() => {
      getAllTags();
      setNewTag("");
    });
  };

  const deleteTag = (id) => {
    deleteAdminData("blogTag", id).then(() => {
      getAllTags();
    });
  };

  const handleTagChange = (event, id) => {
    if (event.target.checked) {
      setTagIds([...tagIds, id]);
    }

    if (!event.target.checked) {
      setTagIds(tagIds.filter((tech) => tech !== id));
    }
  };

  return (
    <>
      <Styled.BlogTextWrapper>
        {tags.map((tag) => (
          <Styled.CheckboxContainer>
            <div>{tag.name}</div>
            <Styled.CheckboxLabel>
              <input
                type="checkbox"
                name="tagOption"
                checked={tagIds.some((el) => el === tag.id)}
                onChange={(event) => handleTagChange(event, tag.id)}
              />
              <Styled.CustomCheckbox
                selected={tagIds.some((el) => el === tag.id)}
              >
                <img src={slides.Check} alt="checkbox" />
              </Styled.CustomCheckbox>
            </Styled.CheckboxLabel>
            <Styled.DeleteTagButton
              type="button"
              onClick={() => deleteTag(tag.id)}
            >
              <img src={slides.deleteIcon} alt="delete tag button" />
            </Styled.DeleteTagButton>
          </Styled.CheckboxContainer>
        ))}
      </Styled.BlogTextWrapper>
      <Styled.TagInputWrapper>
        <Styled.AdminTextInput
          placeholder="Tag Name"
          type="text"
          onChange={({ target: { value } }) => setNewTag(value)}
        />
        <Styled.Button onClick={addTag} type="button">
          Create
        </Styled.Button>
      </Styled.TagInputWrapper>
    </>
  );
};

export default BlogTags;
