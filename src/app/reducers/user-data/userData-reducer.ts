import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TEducationDetails,
  TProjectDetails,
} from "../../../initial-values/auth/student-details/student-details.values";

interface IUser {
  userData: Partial<TStudent>;
}

const initialState: IUser = {
  userData: {
    _id: "",
    educationDetails: [],
    email: "",
    name: "",
    personalDetails: {
      coverPhoto: "",
      profilePicture: "",
      shortBio: "",
      techStacks: [],
    },
    projectDetails: [],
  },
};

const userDataSlice = createSlice({
  name: "user data",
  initialState,
  reducers: {
    updateUserData(state, action: PayloadAction<TStudent>) {
      const {
        educationDetails,
        _id,
        email,
        name,
        personalDetails,
        projectDetails,
      } = action.payload;
      state.userData._id = _id;
      state.userData.email = email;
      state.userData.email = name;

      state.userData.educationDetails = educationDetails.map(
        (education: TEducationDetails) => ({
          instituteName: education.instituteName,
          batch: education.batch,
          percentage: education.percentage,
          country: education.country,
          state: education.state,
        })
      );

      state.userData.personalDetails = {
        coverPhoto: personalDetails.coverPhoto,
        profilePicture: personalDetails.profilePicture,
        shortBio: personalDetails.shortBio,
        techStacks: personalDetails.techStacks.map(
          (techStack: TTechStacks[0]) => ({
            name: techStack.name,
            icon: techStack.icon,
          })
        ),
      };

      state.userData.projectDetails = projectDetails.map(
        (project: TProjectDetails) => ({
          projectName: project.projectName,
          techStacks: project.techStacks.map((techStack: TTechStacks[0]) => ({
            name: techStack.name,
            icon: techStack.icon,
          })),
          dateOfCompletion: project.dateOfCompletion,
          deployedLink: project.deployedLink,
          projectFile: project.projectFile,
        })
      );
    },
  },
});

export const { updateUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
