export type TEducationDetails = {
  instituteName: string;
  batch: string;
  percentage: string;
  country: string;
  state: string;
};

type TFileType = {
  fileName: string;
  base64String: string;
};

export type TPersonalDetails = {
  profilePicture?: TFileType;
  coverPhoto?: TFileType;
  shortBio?: string;
  techStacks?: TTechStacks;
};

export type TProjectDetails = {
  projectName: string;
  techStacks: TTechStacks;
  dateOfCompletion: string;
  deployedLink: string;
  projectFile: TFileType;
};

export type TStudentDetailsFormValues = {
  personalDetails: TPersonalDetails;
  educationDetails: TEducationDetails[];
  projectDetails: TProjectDetails[];
};

export const studentDetailsIniValues: TStudentDetailsFormValues = {
  educationDetails: [
    {
      batch: "",
      country: "",
      instituteName: "",
      percentage: "",
      state: "",
    },
  ],
  personalDetails: {
    coverPhoto: {
      base64String: "",
      fileName: "",
    },
    profilePicture: {
      base64String: "",
      fileName: "",
    },
    shortBio: "",
    techStacks: [],
  },
  projectDetails: [
    {
      dateOfCompletion: "",
      deployedLink: "",
      projectFile: {
        base64String: "",
        fileName: "",
      },
      projectName: "",
      techStacks: [],
    },
  ],
};
