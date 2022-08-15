import ReactGA from "react-ga";

export function scrollEA(data: string) {
  const scrollToBlockEA = (block) => {
    ReactGA.event({
      category: "Scroll Block",
      action: "ScrollToBlock",
      label: `Scroll to ${block}`,
    });
  };

  const bloks: Array<{ nameBlock: string | null; distanceToTop: number }> = [];

  document.querySelectorAll(`[${data}]`).forEach((e) => {
    bloks.push({
      nameBlock: e.getAttribute(data),
      distanceToTop: e.getBoundingClientRect().top,
    });
  });

  document.addEventListener("scroll", () => {
    bloks.forEach((element, index) => {
      if (
        element &&
        window.scrollY > element.distanceToTop - window.scrollY / 8
      ) {
        scrollToBlockEA(element.nameBlock);
        delete bloks[index];
      }
    });
  });
}

export const clickSocialLinkEA = (link) => {
  ReactGA.event({
    category: "Social Link",
    action: "clickToSocialLink",
    label: `${link}`,
  });
};

export const onChangeSlideEA = (sliderInfo) => {
  ReactGA.event({
    category: `Slider ${sliderInfo.sliderName}`,
    action: "onSLideChange",
    label: `Current slide ${sliderInfo.slide + 1}`,
  });
};

export const startProjectEA = () => {
  ReactGA.event({
    category: "Start Project",
    action: "Click the button",
    label: "Click start project button",
  });
};

export const sendFormEA = (values) => {
  ReactGA.event({
    category: "Send Form",
    action: "Send Form",
    label: `Validation was successful`,
  });
};
