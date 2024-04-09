type TTechStacks = {
  label: string;
  icon: string;
};

type TStudent = {
  _id?: string | nul;
  name?: string | nul;
  email?: string | nul;
  personalDetails?: IPersonalDetails | nul;
  educationDetails?: IEducationDetails[] | nul;
  projectDetails?: IProjectDetails[] | nul;
};

type IEducationDetails = {
  instituteName: string;
  batch: string;
  percentage: string;
  country: string;
  state: string;
};

type IPersonalDetails = {
  profilePicture: string;
  coverPhoto: string;
  shortBio: string;
  techStacks: ITechStacks;
};

type IProjectDetails = {
  projectName: string;
  techStacks: ITechStacks;
  dateOfCompletion: string;
  deployedLink: string;
  projectFile: string;
};
