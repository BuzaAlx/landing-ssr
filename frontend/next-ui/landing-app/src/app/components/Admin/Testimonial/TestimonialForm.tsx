import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";

import { ITestimonial, IPlatform } from "../types";
import * as Styled from "../Form.styles";
import { useInput } from "../Hooks";

import CountryCodes from "./countyCodes.json";

const TestimonialForm: React.FC<{
  testimonial?: ITestimonial | undefined;
  close: Function;
}> = ({ testimonial, close }) => {
  const clutch: IPlatform | undefined = testimonial?.platforms.find(
    (item) => item.type === "clutch"
  );

  const upwork: IPlatform | undefined = testimonial?.platforms.find(
    (item) => item.type === "upwork"
  );

  const countryCode = useInput(testimonial?.countryCode);
  const clutchLinkInput = useInput(clutch?.link);
  const upworkLinkInput = useInput(upwork?.link);
  const clutchRateInput = useInput(clutch?.rate);
  const upworkRateInput = useInput(upwork?.rate);
  const customerName = useInput(testimonial?.customerName);
  const companyName = useInput(testimonial?.companyName);
  const customerPosition = useInput(testimonial?.customerPosition);
  const feedback = useInput(testimonial?.feedback);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const clutch =
      clutchLinkInput.value || clutchRateInput.value
        ? {
            type: "clutch",
            link: clutchLinkInput.value,
            rate: clutchRateInput.value,
          }
        : null;
    const upwork =
      upworkLinkInput.value || upworkRateInput.value
        ? {
            type: "upwork",
            link: upworkLinkInput.value,
            rate: upworkRateInput.value,
          }
        : null;
    const newtestimonial: ITestimonial = {
      customerName: customerName.value,
      customerPosition: customerPosition.value,
      companyName: companyName.value,
      countryCode: countryCode.value,
      feedback: feedback.value,
      platforms: [],
    };

    if (clutch) {
      newtestimonial.platforms = [...newtestimonial.platforms, clutch];
    }

    if (upwork) {
      newtestimonial.platforms = [...newtestimonial.platforms, upwork];
    }

    testimonial
      ? updateAdminData(
          "testimonial",
          testimonial?.id!,
          newtestimonial
        ).then(() => close())
      : createAdminData("testimonial", newtestimonial).then(() => close());
  };

  const CountryNameKey = Object.keys(CountryCodes);

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {testimonial ? (
          <h2>Edit testimonial </h2>
        ) : (
          <h2>Create new testimonial</h2>
        )}
        <Styled.Label>
          <span>Customer Name:</span>
          <Styled.AdminTextInput
            className="form__title"
            type="text"
            placeholder={
              testimonial ? "Name Surname" : "Write customer name here"
            }
            {...customerName}
          />
        </Styled.Label>
        <Styled.Label>
          <span>Company Name:</span>
          <Styled.AdminTextInput
            className="form__title"
            type="text"
            placeholder={testimonial ? "BigCompany" : "Write company name here"}
            {...companyName}
          />
        </Styled.Label>
        <Styled.Label>
          <span> Country Code: </span>
          <Styled.Select
            className="form__title"
            {...countryCode}
            onChange={countryCode.onChange}
          >
            {CountryNameKey.map((codeValue) => {
              return (
                <option
                  selected={codeValue === countryCode.value}
                  value={codeValue}
                  key={codeValue}
                >
                  {CountryCodes[codeValue]}
                </option>
              );
            })}
            )
          </Styled.Select>
        </Styled.Label>
        <Styled.Label>
          <span> Customer Position: </span>
          <Styled.AdminTextInput
            className="form__title"
            type="text"
            placeholder={testimonial ? "CEO" : "Write customer position here"}
            {...customerPosition}
          />
        </Styled.Label>
        <Styled.Label>
          <span>Feedback:</span>
          <Styled.AdminTextArea
            className="form__text"
            placeholder="Write customer position here"
            {...feedback}
          />
        </Styled.Label>
        <Styled.Label double>
          <span>Upwork</span>
          <Styled.AdminTextInput
            type="text"
            placeholder={testimonial ? "UpWork.com" : "Upwork link"}
            {...upworkLinkInput}
          />
          <Styled.AdminTextInput
            type="number"
            min="1"
            max="5"
            placeholder={testimonial ? "5" : "Rating"}
            {...upworkRateInput}
          />
        </Styled.Label>
        <Styled.Label double>
          <span>Clutch</span>
          <Styled.AdminTextInput
            type="text"
            placeholder={testimonial ? "Clutch.com" : "Clutch link"}
            {...clutchLinkInput}
          />
          <Styled.AdminTextInput
            type="number"
            min="1"
            max="5"
            placeholder={testimonial ? "5" : "Rating"}
            {...clutchRateInput}
          />
        </Styled.Label>

        <Styled.ButtonWrapper>
          <Styled.Button
            empty={!testimonial}
            type="submit"
            disabled={
              !(
                customerName.value &&
                customerPosition.value &&
                companyName.value &&
                countryCode &&
                feedback.value
              )
            }
          >
            {testimonial ? "Save" : "Сreate"}
          </Styled.Button>
          <Styled.Button type="button" onClick={() => close()}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default TestimonialForm;
