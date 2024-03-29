interface ItemType {
  id: number;
  subTitle: string;
  subUrl: string;
}

interface MenuType {
  id: number;
  title: string;
  url: string;
  items?: ItemType[];
}

interface MainLinkType {
  id: number;
  url: string;
  img: string;
  title: string;
  sub: string;
}

interface EducationType {
  img: string;
  title: string;
  body: string;
  list: ListType[];
}

interface ListType {
  img: string;
  list: string[];
  end?: boolean;
}

interface OutlineType {
  title: string;
  first: {
    id: number;
    firstTitle: string;
    firstChild?: {
      secondTitle: string;
      secondChild?: string[];
    }[];
  }[];
}

// Notices API
interface AddNoticePayload {
  title: string;
  body: string;
}

// Stories API
interface AddStoryPayload {
  title: string;
  body: string;
  thumbnail: string;
  tags: string[];
}

// Questions API
interface AddQuestionPayload {
  username: string;
  password: string;
  title: string;
  body: string;
  phone: string;
  email: string;
}
