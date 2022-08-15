import ItemButtons from "../ItemButtons/ItemButtons";
import * as Styled from "../Item.styles";
import { ITestimonial } from "../types";

const Testimonial: React.FC<{
  testimonial: ITestimonial;
  openModal: Function;
  deleteItem: Function;
}> = ({ testimonial, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <Styled.List>
          <Styled.ListItem>
            <span>Customer Name:</span>
            <span>{testimonial.customerName}</span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Company name:</span>
            <span>{testimonial.companyName} </span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Country code:</span>
            <span>{testimonial.countryCode} </span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Customer Position:</span>
            <span>{testimonial.customerPosition} </span>
          </Styled.ListItem>
          <Styled.ListItem>
            <span>Feedback</span>
            <span>{testimonial.feedback} </span>
          </Styled.ListItem>
          {testimonial.sites.map((platform) => (
            <>
              <Styled.ListItem>
                <span>{`${platform.name} link`}</span>
                <span> {platform.link}</span>
              </Styled.ListItem>
              <Styled.ListItem>
                <span>{`${platform.name} rating`}</span>
                <span> {platform.rate}</span>
              </Styled.ListItem>
            </>
          ))}
        </Styled.List>
      </Styled.Item>
      <ItemButtons
        deleteItem={() => deleteItem("testimonial", testimonial.id)}
        openModal={openModal}
        item={testimonial}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default Testimonial;
