export interface ProjectImgStyle {
  img: string;
  width: string;
}

export interface ProjectCardType {
  title: string;
  projectImg: ProjectImgStyle;
  technologies: Array<string>;
  background: string;
  children: React.ReactNode;
}

export interface IHeader {
  socialList: Array<ISocialInside>;
  fill?: string;
  navigation: Array<ICategoriesInside>;
}
export interface ISvgData {
  path: string;
  fill: string;
}

export interface ISocialInside {
  title: string;
  link: string;
  src: Array<ISvgData>;
  width: number;
  height: number;
}
export interface ISocial {
  socialList: Array<ISocialInside>;
  fill?: string;
}

export interface IFooter {
  socialList?: Array<ISocialInside>;
  fill?: string;
}

export interface IArticle {
  id?: string;
  desc?: string;
  title: string;
  children: React.ReactNode;
}

export interface IHome {
  id?: string;
}

export interface IMenu {
  children: React.ReactNode;
  setMenuState: (value: boolean) => void;
  activeMenu: boolean;
}

export interface IButton {
  type?: string;
  text: string;
  link?: string;
  id?: string;
  onClick?: () => {
    return: any;
  };
}
export interface ICategoriesInside {
  link: string;
  title: string;
}
export interface ICategories {
  navigation: Array<ICategoriesInside>;
}

export interface IInput {
  value?: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: any;
  onBlur?: any;
  errors?: object;
  touched?: any;
}
export interface ITextArea {
  placeholder: string;
  name: string;
  onChange?: any;
  onBlur?: any;
  value?: string;
  errors?: object;
  touched?: any;
}
export interface SlidePersonType {
  name: string;
  position: string;
  country?: { name: string; img: string };
  img: string;
}

export interface IProject {
  item: {
    id: string;
    name: string;
    countryCode: string;
    shortDescription: string;
    fullDescription: string;
    technologies: Array<IProjectTechType>;
    link: string;
    imageUrl: string;
  };
}

interface IProjectTechType {
  id: string;
  name: string;
  iconUrl?: string;
}

export interface ITestimonial {
  id: string | number;
  customerName: string;
  countryCode: string;
  companyName: string;
  customerPosition: string;
  feedback: string;
  platforms: IPlatform[];
}

interface IPlatform {
  id: string | number;
  type: string;
  rate: number;
  link: string;
}

export interface ITechnology {
  type: string;
  technologies: string[];
}

export interface IFact {
  id: string | number;
  title: string;
  text: string;
  iconUrl: string;
}

export interface ISlogan {
  title: string;
  text: string;
}

export interface IWorker {
  id: string | number;
  name: string;
  position: string;
  text: string;
  imageUrl: string;
}

export interface IFeaturedTechnology {
  id: string | number;
  name: string;
  text: string;
  imageUrl: string;
}

export interface IBlogArticle {
  id?: string;
  content?: string;
  title: string;
  author?: string;
  imageFileUrl?: string;
  tags?: IBlogArticleTag[];
  createdAt?: string;
}

interface IBlogArticleTag {
  id: string;
  name: string;
}
