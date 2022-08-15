export interface IFact {
  id: string;
  title: string;
  text: string;
  iconFile: IIconFile;
  showOnHomePage: boolean;
}
export interface IIconFile {
  id: string;
  name: string;
  extension: string;
  mimeType: string;
  size: number;
  s3FileKey: string;
  s3FileUrl: string;
  uploadedAt: string;
  url: string;
}

export interface ISlogan {
  id: string;
  title: string;
  text: string;
  selected: boolean;
}

export interface IWorker {
  id: string;
  name: string;
  position: string;
  text: string;
  imageFile: IIconFile;
  showOnHomePage: boolean;
  placeOnHomePage: number;
}

export interface IProject {
  id: string;
  name: string;
  countryCode: string;
  shortDescription: string;
  fullDescription: string;
  technologies: ITechnology[];
  link: string;
  imageFile: IIconFile;
  showOnHomePage: boolean;
}

export interface ITechnology {
  id: string;
  name: string;
  category: string;
  iconFile: IIconFile;
}

export interface IFeaturedTechnology {
  id: string;
  name: string;
  text: string;
  imageFile: IIconFile;
}

export interface ITestimonial {
  id?: string;
  customerName: string;
  countryCode: string | undefined;
  companyName: string;
  customerPosition: string;
  feedback: string;
  sites: ISite[];
}

export interface ISite {
  id?: string;
  name: string;
  rate: number;
  link: string;
}

export interface IArticle {
  id: string;
  title: string;
  author: string;
  imageFile: IIconFile;
  content: string;
  tags: ITag[];
  views: 13;
  createdAt: string;
}

export interface ITag {
  id: string;
  name: string;
}
