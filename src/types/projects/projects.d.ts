type TProject = {
  id: string;
  title: string;
  category: Category;
  startDate: Date;
  endDate: Date;
  shortDescription: string;
  longDescription: string;
  themes: string[];
  tags: string[];
  createdAt?: Date | null;
  techStack: TTechStacks;
};

type TTechStack = {
  name: string;
  icon: string;
};

type TTechStacks = TTechStack[];
