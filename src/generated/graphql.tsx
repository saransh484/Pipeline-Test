import { NewDate } from '../types/taskType';
import { JSON } from '../types/taskType';
import { IPriority } from '../types/taskType';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: NewDate; output: NewDate; }
  JSON: { input: JSON; output: JSON; }
  Priority: { input: IPriority; output: IPriority; }
};

export enum Category {
  Externship = 'EXTERNSHIP',
  Hackathon = 'HACKATHON'
}

export type Count = {
  __typename?: 'Count';
  count: Scalars['Int']['output'];
};

export type EducationInput = {
  batch?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  instituteName?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export enum FieldType {
  Button = 'BUTTON',
  Checkbox = 'CHECKBOX',
  Date = 'DATE',
  Number = 'NUMBER',
  Radio = 'RADIO',
  Select = 'SELECT',
  Text = 'TEXT',
  Textarea = 'TEXTAREA'
}

export type File = {
  base64String: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
};

export type FormStructure = {
  __typename?: 'FormStructure';
  inline: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  minRows: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Array<Option>>;
  placeholder: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: FieldType;
};

export type FormStructureInput = {
  inline?: InputMaybe<Scalars['Boolean']['input']>;
  label: Scalars['String']['input'];
  minRows?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<InputMaybe<OptionInput>>>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type IEducationDetails = {
  __typename?: 'IEducationDetails';
  batch?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  instituteName?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type IPersonalDetails = {
  __typename?: 'IPersonalDetails';
  coverPhoto?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  shortBio?: Maybe<Scalars['String']['output']>;
  techStacks?: Maybe<Array<Maybe<TechStack>>>;
};

export type IProjectDetails = {
  __typename?: 'IProjectDetails';
  dateOfCompletion?: Maybe<Scalars['String']['output']>;
  deployedLink?: Maybe<Scalars['String']['output']>;
  projectFile?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  techStacks?: Maybe<Array<Maybe<TechStack>>>;
};

export type Mentor = {
  __typename?: 'Mentor';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MentorAuthPayload = {
  __typename?: 'MentorAuthPayload';
  token: Scalars['String']['output'];
  user: Mentor;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNotification?: Maybe<UpdateRes>;
  createOrUpdateEvaluationForm: TSubmissionForm;
  createOrUpdateSubmissionForm: TSubmissionForm;
  createProject?: Maybe<Project>;
  createTag?: Maybe<Tags>;
  createTask?: Maybe<Tasks>;
  createTechStack?: Maybe<TechStacks>;
  createTheme?: Maybe<Themes>;
  createToken?: Maybe<User>;
  deleteTag?: Maybe<UpdateRes>;
  deleteTechStack?: Maybe<UpdateRes>;
  deleteTheme?: Maybe<UpdateRes>;
  editProject?: Maybe<Project>;
  fillSubmissionForm: UpdateRes;
  mentorLogin?: Maybe<MentorAuthPayload>;
  mentorSignup?: Maybe<MentorAuthPayload>;
  registerHackathon?: Maybe<Registration>;
  updateStudentDetails?: Maybe<UpdateRes>;
  updateTask?: Maybe<UpdateRes>;
  userLogin?: Maybe<UserAuthPayload>;
  userSignup?: Maybe<UserAuthPayload>;
};


export type MutationCreateNotificationArgs = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateOrUpdateEvaluationFormArgs = {
  formData: Array<FormStructureInput>;
  formId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateOrUpdateSubmissionFormArgs = {
  formData: Array<FormStructureInput>;
  formId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProjectArgs = {
  category: Category;
  endDate: Scalars['Date']['input'];
  longDescription: Scalars['String']['input'];
  shortDescription: Scalars['String']['input'];
  startDate: Scalars['Date']['input'];
  tags: Array<InputMaybe<Scalars['String']['input']>>;
  techStack: Array<InputMaybe<TechStackInput>>;
  themes: Array<InputMaybe<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};


export type MutationCreateTagArgs = {
  label: Scalars['String']['input'];
};


export type MutationCreateTaskArgs = {
  approxTime: Scalars['String']['input'];
  longDescription: Scalars['String']['input'];
  priority: Scalars['String']['input'];
  project: Scalars['String']['input'];
  shortDescription: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateTechStackArgs = {
  icon: Scalars['String']['input'];
  label: Scalars['String']['input'];
};


export type MutationCreateThemeArgs = {
  label: Scalars['String']['input'];
};


export type MutationCreateTokenArgs = {
  firebaseToken: Scalars['String']['input'];
};


export type MutationDeleteTagArgs = {
  tagId: Scalars['String']['input'];
};


export type MutationDeleteTechStackArgs = {
  techId: Scalars['String']['input'];
};


export type MutationDeleteThemeArgs = {
  themeId: Scalars['String']['input'];
};


export type MutationEditProjectArgs = {
  _id: Scalars['String']['input'];
  category: Category;
  endDate: Scalars['Date']['input'];
  longDescription: Scalars['String']['input'];
  shortDescription: Scalars['String']['input'];
  startDate: Scalars['Date']['input'];
  tags: Array<InputMaybe<Scalars['String']['input']>>;
  techStack: Array<InputMaybe<TechStackInput>>;
  themes: Array<InputMaybe<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};


export type MutationFillSubmissionFormArgs = {
  form: SubmittedFormInput;
  projectId: Scalars['String']['input'];
};


export type MutationMentorLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationMentorSignupArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterHackathonArgs = {
  projectId: Scalars['String']['input'];
  registrationFor: Category;
  registrationType: RegistrationType;
  team?: InputMaybe<Array<InputMaybe<TeamDetailsInput>>>;
  teamName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateStudentDetailsArgs = {
  educationDetails?: InputMaybe<Array<InputMaybe<EducationInput>>>;
  personalDetails: PersonalDetailsInput;
  projectDetails?: InputMaybe<Array<InputMaybe<ProjectInput>>>;
};


export type MutationUpdateTaskArgs = {
  approxTime: Scalars['String']['input'];
  longDescription: Scalars['String']['input'];
  priority: Scalars['String']['input'];
  shortDescription: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updateTaskId: Scalars['String']['input'];
};


export type MutationUserLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUserSignupArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Option = {
  __typename?: 'Option';
  key?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type OptionInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PersonalDetailsInput = {
  coverPhoto?: InputMaybe<File>;
  profilePicture?: InputMaybe<File>;
  shortBio?: InputMaybe<Scalars['String']['input']>;
  techStacks?: InputMaybe<Array<InputMaybe<TechStackInput>>>;
};

export type Project = {
  __typename?: 'Project';
  category: Category;
  createdAt?: Maybe<Scalars['Date']['output']>;
  endDate: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  latestRegistered: Array<Scalars['String']['output']>;
  longDescription: Scalars['String']['output'];
  registrationCount: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  tags: Array<Scalars['String']['output']>;
  tasks: Array<Maybe<Scalars['String']['output']>>;
  techStack: Array<TechStack>;
  themes: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type ProjectInput = {
  dateOfCompletion?: InputMaybe<Scalars['String']['input']>;
  deployedLink?: InputMaybe<Scalars['String']['input']>;
  projectFile?: InputMaybe<File>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  techStacks?: InputMaybe<Array<InputMaybe<TechStackInput>>>;
};

export type ProjectRegistration = {
  __typename?: 'ProjectRegistration';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  team: Array<Team>;
  teamName?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllTasks?: Maybe<Array<Maybe<Tasks>>>;
  getEvaluationForm?: Maybe<Array<FormStructure>>;
  getMentorProfile?: Maybe<Mentor>;
  getMentors?: Maybe<Array<Maybe<Mentor>>>;
  getNewProjectsCount: Count;
  getOngoingProjects?: Maybe<Array<Maybe<Project>>>;
  getPreviousProjects?: Maybe<Array<Maybe<Project>>>;
  getProjectById?: Maybe<Project>;
  getProjectDetails?: Maybe<StudentProject>;
  getProjectTasks?: Maybe<Array<Maybe<Tasks>>>;
  getProjectTasksForStudent?: Maybe<Array<Maybe<Tasks>>>;
  getProjects?: Maybe<Array<Maybe<Project>>>;
  getProjectsCount?: Maybe<Count>;
  getRegisteredProjectAfterEndDate?: Maybe<Array<StudentProject>>;
  getRegisteredProjectBeforeEndDate?: Maybe<Array<StudentProject>>;
  getRegisteredProjectsCount: Count;
  getRegistrationsInProject?: Maybe<Array<ProjectRegistration>>;
  getSubmissionForm?: Maybe<Array<FormStructure>>;
  getTags?: Maybe<Array<Maybe<Tags>>>;
  getTask?: Maybe<Tasks>;
  getTechStacks?: Maybe<Array<Maybe<TechStacks>>>;
  getThemes?: Maybe<Array<Maybe<Themes>>>;
  getUpcomingExternships?: Maybe<Array<StudentProject>>;
  getUpcomingExternshipsCount: Count;
  getUpcomingHackathons?: Maybe<Array<StudentProject>>;
  getUpcomingHackathonsCount: Count;
  getUserProfile?: Maybe<User>;
  getUserRegistration?: Maybe<ProjectRegistration>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetEvaluationFormArgs = {
  projectId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetNewProjectsCountArgs = {
  category: Category;
};


export type QueryGetOngoingProjectsArgs = {
  category: Category;
};


export type QueryGetPreviousProjectsArgs = {
  category: Category;
};


export type QueryGetProjectByIdArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryGetProjectDetailsArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryGetProjectTasksArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryGetProjectTasksForStudentArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryGetProjectsArgs = {
  category: Category;
};


export type QueryGetRegisteredProjectsCountArgs = {
  category: Category;
};


export type QueryGetRegistrationsInProjectArgs = {
  projectId: Scalars['String']['input'];
  registrationType: RegistrationType;
};


export type QueryGetSubmissionFormArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryGetTaskArgs = {
  taskId: Scalars['String']['input'];
};


export type QueryGetUpcomingExternshipsArgs = {
  isRegistered?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetUpcomingHackathonsArgs = {
  isRegistered?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetUserRegistrationArgs = {
  projectId: Scalars['String']['input'];
};

export type Registration = {
  __typename?: 'Registration';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  project: Project;
  registrationFor: Category;
  registrationType: RegistrationType;
  student: User;
  team?: Maybe<Array<Maybe<User>>>;
  teamName?: Maybe<Scalars['String']['output']>;
};

export enum RegistrationType {
  Individual = 'INDIVIDUAL',
  Team = 'TEAM'
}

export type StudentProject = {
  __typename?: 'StudentProject';
  category: Category;
  createdAt?: Maybe<Scalars['Date']['output']>;
  endDate: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  isUserRegistered: Scalars['Boolean']['output'];
  latestRegistered: Array<Scalars['String']['output']>;
  longDescription: Scalars['String']['output'];
  registrationCount: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  tags: Array<Scalars['String']['output']>;
  techStack: Array<TechStack>;
  themes: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type SubmittedFormInput = {
  form: Array<FormStructureInput>;
  value: Scalars['JSON']['input'];
};

export type TSubmissionForm = {
  __typename?: 'TSubmissionForm';
  form?: Maybe<Array<Maybe<FormStructure>>>;
  mentorId?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
};

export type TSubmissionInput = {
  form?: InputMaybe<Array<InputMaybe<FormStructureInput>>>;
  mentorId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
};

export type Tags = {
  __typename?: 'Tags';
  _id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type Tasks = {
  __typename?: 'Tasks';
  approxTime: Scalars['String']['output'];
  id: Scalars['String']['output'];
  longDescription: Scalars['String']['output'];
  priority: Scalars['Priority']['output'];
  project: Project;
  shortDescription: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Team = {
  __typename?: 'Team';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TeamDetailsInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type TechStack = {
  __typename?: 'TechStack';
  icon: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TechStackInput = {
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type TechStacks = {
  __typename?: 'TechStacks';
  _id?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type Themes = {
  __typename?: 'Themes';
  _id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type UpdateRes = {
  __typename?: 'UpdateRes';
  status: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']['output']>;
  educationDetails?: Maybe<Array<Maybe<IEducationDetails>>>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  personalDetails?: Maybe<IPersonalDetails>;
  projectDetails?: Maybe<Array<Maybe<IProjectDetails>>>;
};

export type UserAuthPayload = {
  __typename?: 'UserAuthPayload';
  token?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type FillSubmissionFormMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  form: SubmittedFormInput;
}>;


export type FillSubmissionFormMutation = { __typename?: 'Mutation', fillSubmissionForm: { __typename?: 'UpdateRes', status: string } };

export type UserLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin?: { __typename?: 'UserAuthPayload', token?: string | null, user: { __typename?: 'User', _id?: string | null, name?: string | null, email?: string | null, educationDetails?: Array<{ __typename?: 'IEducationDetails', instituteName?: string | null, batch?: string | null, percentage?: string | null, country?: string | null, state?: string | null } | null> | null, projectDetails?: Array<{ __typename?: 'IProjectDetails', projectName?: string | null, dateOfCompletion?: string | null, deployedLink?: string | null, projectFile?: string | null, techStacks?: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> | null } | null> | null, personalDetails?: { __typename?: 'IPersonalDetails', profilePicture?: string | null, coverPhoto?: string | null, shortBio?: string | null, techStacks?: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> | null } | null } } | null };

export type RegisterHackathonMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  registrationType: RegistrationType;
  registrationFor: Category;
  team?: InputMaybe<Array<InputMaybe<TeamDetailsInput>> | InputMaybe<TeamDetailsInput>>;
  teamName?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterHackathonMutation = { __typename?: 'Mutation', registerHackathon?: { __typename?: 'Registration', id: string, name: string } | null };

export type UserSignupMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type UserSignupMutation = { __typename?: 'Mutation', userSignup?: { __typename?: 'UserAuthPayload', token?: string | null, user: { __typename?: 'User', _id?: string | null, name?: string | null, email?: string | null, educationDetails?: Array<{ __typename?: 'IEducationDetails', instituteName?: string | null, batch?: string | null, percentage?: string | null, country?: string | null, state?: string | null } | null> | null, projectDetails?: Array<{ __typename?: 'IProjectDetails', projectName?: string | null, dateOfCompletion?: string | null, deployedLink?: string | null, projectFile?: string | null, techStacks?: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> | null } | null> | null, personalDetails?: { __typename?: 'IPersonalDetails', profilePicture?: string | null, coverPhoto?: string | null, shortBio?: string | null, techStacks?: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> | null } | null } } | null };

export type UpdateStudentDetailsMutationVariables = Exact<{
  personalDetails: PersonalDetailsInput;
  educationDetails?: InputMaybe<Array<InputMaybe<EducationInput>> | InputMaybe<EducationInput>>;
  projectDetails?: InputMaybe<Array<InputMaybe<ProjectInput>> | InputMaybe<ProjectInput>>;
}>;


export type UpdateStudentDetailsMutation = { __typename?: 'Mutation', updateStudentDetails?: { __typename?: 'UpdateRes', status: string } | null };

export type CreateTokenMutationVariables = Exact<{
  firebaseToken: Scalars['String']['input'];
}>;


export type CreateTokenMutation = { __typename?: 'Mutation', createToken?: { __typename?: 'User', _id?: string | null, name?: string | null, email?: string | null } | null };

export type GetNewProjectsCountQueryVariables = Exact<{
  category: Category;
}>;


export type GetNewProjectsCountQuery = { __typename?: 'Query', getNewProjectsCount: { __typename?: 'Count', count: number } };

export type GetProjectDetailsQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;


export type GetProjectDetailsQuery = { __typename?: 'Query', getProjectDetails?: { __typename?: 'StudentProject', isUserRegistered: boolean, id: string, title: string, category: Category, startDate: NewDate, endDate: NewDate, shortDescription: string, longDescription: string, themes: Array<string>, tags: Array<string>, createdAt?: NewDate | null, techStack: Array<{ __typename?: 'TechStack', name: string, icon: string }> } | null };

export type GetProjectTasksForStudentQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;


export type GetProjectTasksForStudentQuery = { __typename?: 'Query', getProjectTasksForStudent?: Array<{ __typename?: 'Tasks', title: string, approxTime: string, id: string, longDescription: string, priority: IPriority, shortDescription: string } | null> | null };

export type GetRegisteredProjectAfterEndDateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRegisteredProjectAfterEndDateQuery = { __typename?: 'Query', getRegisteredProjectAfterEndDate?: Array<{ __typename?: 'StudentProject', isUserRegistered: boolean, id: string, title: string, category: Category, startDate: NewDate, endDate: NewDate, shortDescription: string, longDescription: string, themes: Array<string>, tags: Array<string>, createdAt?: NewDate | null, registrationCount: number, latestRegistered: Array<string>, techStack: Array<{ __typename?: 'TechStack', name: string, icon: string }> }> | null };

export type GetRegisteredProjectBeforeEndDateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRegisteredProjectBeforeEndDateQuery = { __typename?: 'Query', getRegisteredProjectBeforeEndDate?: Array<{ __typename?: 'StudentProject', isUserRegistered: boolean, id: string, title: string, category: Category, startDate: NewDate, endDate: NewDate, shortDescription: string, longDescription: string, themes: Array<string>, tags: Array<string>, createdAt?: NewDate | null, registrationCount: number, latestRegistered: Array<string>, techStack: Array<{ __typename?: 'TechStack', name: string, icon: string }> }> | null };

export type GetRegisteredProjectsCountQueryVariables = Exact<{
  category: Category;
}>;


export type GetRegisteredProjectsCountQuery = { __typename?: 'Query', getRegisteredProjectsCount: { __typename?: 'Count', count: number } };

export type GetSubmissionFormQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;


export type GetSubmissionFormQuery = { __typename?: 'Query', getSubmissionForm?: Array<{ __typename?: 'FormStructure', name: string, required: boolean, label: string, placeholder: string, inline: boolean, type: FieldType, minRows: number, options?: Array<{ __typename?: 'Option', label: string, value: string, key?: string | null }> | null }> | null };

export type GetTechStacksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTechStacksQuery = { __typename?: 'Query', getTechStacks?: Array<{ __typename?: 'TechStacks', label?: string | null, icon?: string | null, _id?: string | null } | null> | null };

export type GetUpcomingExternshipsQueryVariables = Exact<{
  isRegistered?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetUpcomingExternshipsQuery = { __typename?: 'Query', getUpcomingExternships?: Array<{ __typename?: 'StudentProject', category: Category, createdAt?: NewDate | null, endDate: NewDate, id: string, isUserRegistered: boolean, latestRegistered: Array<string>, longDescription: string, registrationCount: number, shortDescription: string, startDate: NewDate, tags: Array<string>, themes: Array<string>, title: string, techStack: Array<{ __typename?: 'TechStack', icon: string, name: string }> }> | null };

export type GetUpcomingExternshipsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUpcomingExternshipsCountQuery = { __typename?: 'Query', getUpcomingExternshipsCount: { __typename?: 'Count', count: number } };

export type GetUpcomingHackathonsQueryVariables = Exact<{
  isRegistered?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetUpcomingHackathonsQuery = { __typename?: 'Query', getUpcomingHackathons?: Array<{ __typename?: 'StudentProject', isUserRegistered: boolean, id: string, title: string, category: Category, startDate: NewDate, endDate: NewDate, shortDescription: string, longDescription: string, themes: Array<string>, tags: Array<string>, registrationCount: number, latestRegistered: Array<string>, createdAt?: NewDate | null, techStack: Array<{ __typename?: 'TechStack', icon: string, name: string }> }> | null };

export type GetUpcomingHackathonsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUpcomingHackathonsCountQuery = { __typename?: 'Query', getUpcomingHackathonsCount: { __typename?: 'Count', count: number } };

export type GetUserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProfileQuery = { __typename?: 'Query', getUserProfile?: { __typename?: 'User', _id?: string | null, name?: string | null, email?: string | null, educationDetails?: Array<{ __typename?: 'IEducationDetails', instituteName?: string | null, batch?: string | null, percentage?: string | null, country?: string | null, state?: string | null } | null> | null, projectDetails?: Array<{ __typename?: 'IProjectDetails', projectName?: string | null, dateOfCompletion?: string | null, deployedLink?: string | null, projectFile?: string | null, techStacks?: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> | null } | null> | null, personalDetails?: { __typename?: 'IPersonalDetails', profilePicture?: string | null, coverPhoto?: string | null, shortBio?: string | null, techStacks?: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> | null } | null } | null };

export type GetUserRegistrationQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;


export type GetUserRegistrationQuery = { __typename?: 'Query', getUserRegistration?: { __typename?: 'ProjectRegistration', name: string, email: string, teamName?: string | null, team: Array<{ __typename?: 'Team', name: string, email: string }> } | null };


export const FillSubmissionFormDocument = gql`
    mutation FillSubmissionForm($projectId: String!, $form: SubmittedFormInput!) {
  fillSubmissionForm(projectId: $projectId, form: $form) {
    status
  }
}
    `;
export type FillSubmissionFormMutationFn = Apollo.MutationFunction<FillSubmissionFormMutation, FillSubmissionFormMutationVariables>;

/**
 * __useFillSubmissionFormMutation__
 *
 * To run a mutation, you first call `useFillSubmissionFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFillSubmissionFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fillSubmissionFormMutation, { data, loading, error }] = useFillSubmissionFormMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      form: // value for 'form'
 *   },
 * });
 */
export function useFillSubmissionFormMutation(baseOptions?: Apollo.MutationHookOptions<FillSubmissionFormMutation, FillSubmissionFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FillSubmissionFormMutation, FillSubmissionFormMutationVariables>(FillSubmissionFormDocument, options);
      }
export type FillSubmissionFormMutationHookResult = ReturnType<typeof useFillSubmissionFormMutation>;
export type FillSubmissionFormMutationResult = Apollo.MutationResult<FillSubmissionFormMutation>;
export type FillSubmissionFormMutationOptions = Apollo.BaseMutationOptions<FillSubmissionFormMutation, FillSubmissionFormMutationVariables>;
export const UserLoginDocument = gql`
    mutation UserLogin($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    user {
      _id
      name
      email
      educationDetails {
        instituteName
        batch
        percentage
        country
        state
      }
      projectDetails {
        projectName
        techStacks {
          name
          icon
        }
        dateOfCompletion
        deployedLink
        projectFile
      }
      personalDetails {
        profilePicture
        coverPhoto
        shortBio
        techStacks {
          name
          icon
        }
      }
    }
    token
  }
}
    `;
export type UserLoginMutationFn = Apollo.MutationFunction<UserLoginMutation, UserLoginMutationVariables>;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUserLoginMutation(baseOptions?: Apollo.MutationHookOptions<UserLoginMutation, UserLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserLoginMutation, UserLoginMutationVariables>(UserLoginDocument, options);
      }
export type UserLoginMutationHookResult = ReturnType<typeof useUserLoginMutation>;
export type UserLoginMutationResult = Apollo.MutationResult<UserLoginMutation>;
export type UserLoginMutationOptions = Apollo.BaseMutationOptions<UserLoginMutation, UserLoginMutationVariables>;
export const RegisterHackathonDocument = gql`
    mutation RegisterHackathon($projectId: String!, $registrationType: RegistrationType!, $registrationFor: Category!, $team: [TeamDetailsInput], $teamName: String) {
  registerHackathon(
    projectId: $projectId
    registrationType: $registrationType
    registrationFor: $registrationFor
    team: $team
    teamName: $teamName
  ) {
    id
    name
  }
}
    `;
export type RegisterHackathonMutationFn = Apollo.MutationFunction<RegisterHackathonMutation, RegisterHackathonMutationVariables>;

/**
 * __useRegisterHackathonMutation__
 *
 * To run a mutation, you first call `useRegisterHackathonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterHackathonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerHackathonMutation, { data, loading, error }] = useRegisterHackathonMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      registrationType: // value for 'registrationType'
 *      registrationFor: // value for 'registrationFor'
 *      team: // value for 'team'
 *      teamName: // value for 'teamName'
 *   },
 * });
 */
export function useRegisterHackathonMutation(baseOptions?: Apollo.MutationHookOptions<RegisterHackathonMutation, RegisterHackathonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterHackathonMutation, RegisterHackathonMutationVariables>(RegisterHackathonDocument, options);
      }
export type RegisterHackathonMutationHookResult = ReturnType<typeof useRegisterHackathonMutation>;
export type RegisterHackathonMutationResult = Apollo.MutationResult<RegisterHackathonMutation>;
export type RegisterHackathonMutationOptions = Apollo.BaseMutationOptions<RegisterHackathonMutation, RegisterHackathonMutationVariables>;
export const UserSignupDocument = gql`
    mutation UserSignup($name: String!, $email: String!, $password: String!) {
  userSignup(name: $name, email: $email, password: $password) {
    token
    user {
      _id
      name
      email
      educationDetails {
        instituteName
        batch
        percentage
        country
        state
      }
      projectDetails {
        projectName
        techStacks {
          name
          icon
        }
        dateOfCompletion
        deployedLink
        projectFile
      }
      personalDetails {
        profilePicture
        coverPhoto
        shortBio
        techStacks {
          name
          icon
        }
      }
    }
  }
}
    `;
export type UserSignupMutationFn = Apollo.MutationFunction<UserSignupMutation, UserSignupMutationVariables>;

/**
 * __useUserSignupMutation__
 *
 * To run a mutation, you first call `useUserSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignupMutation, { data, loading, error }] = useUserSignupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUserSignupMutation(baseOptions?: Apollo.MutationHookOptions<UserSignupMutation, UserSignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserSignupMutation, UserSignupMutationVariables>(UserSignupDocument, options);
      }
export type UserSignupMutationHookResult = ReturnType<typeof useUserSignupMutation>;
export type UserSignupMutationResult = Apollo.MutationResult<UserSignupMutation>;
export type UserSignupMutationOptions = Apollo.BaseMutationOptions<UserSignupMutation, UserSignupMutationVariables>;
export const UpdateStudentDetailsDocument = gql`
    mutation UpdateStudentDetails($personalDetails: PersonalDetailsInput!, $educationDetails: [EducationInput], $projectDetails: [ProjectInput]) {
  updateStudentDetails(
    personalDetails: $personalDetails
    educationDetails: $educationDetails
    projectDetails: $projectDetails
  ) {
    status
  }
}
    `;
export type UpdateStudentDetailsMutationFn = Apollo.MutationFunction<UpdateStudentDetailsMutation, UpdateStudentDetailsMutationVariables>;

/**
 * __useUpdateStudentDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateStudentDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentDetailsMutation, { data, loading, error }] = useUpdateStudentDetailsMutation({
 *   variables: {
 *      personalDetails: // value for 'personalDetails'
 *      educationDetails: // value for 'educationDetails'
 *      projectDetails: // value for 'projectDetails'
 *   },
 * });
 */
export function useUpdateStudentDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentDetailsMutation, UpdateStudentDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentDetailsMutation, UpdateStudentDetailsMutationVariables>(UpdateStudentDetailsDocument, options);
      }
export type UpdateStudentDetailsMutationHookResult = ReturnType<typeof useUpdateStudentDetailsMutation>;
export type UpdateStudentDetailsMutationResult = Apollo.MutationResult<UpdateStudentDetailsMutation>;
export type UpdateStudentDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateStudentDetailsMutation, UpdateStudentDetailsMutationVariables>;
export const CreateTokenDocument = gql`
    mutation CreateToken($firebaseToken: String!) {
  createToken(firebaseToken: $firebaseToken) {
    _id
    name
    email
  }
}
    `;
export type CreateTokenMutationFn = Apollo.MutationFunction<CreateTokenMutation, CreateTokenMutationVariables>;

/**
 * __useCreateTokenMutation__
 *
 * To run a mutation, you first call `useCreateTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTokenMutation, { data, loading, error }] = useCreateTokenMutation({
 *   variables: {
 *      firebaseToken: // value for 'firebaseToken'
 *   },
 * });
 */
export function useCreateTokenMutation(baseOptions?: Apollo.MutationHookOptions<CreateTokenMutation, CreateTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTokenMutation, CreateTokenMutationVariables>(CreateTokenDocument, options);
      }
export type CreateTokenMutationHookResult = ReturnType<typeof useCreateTokenMutation>;
export type CreateTokenMutationResult = Apollo.MutationResult<CreateTokenMutation>;
export type CreateTokenMutationOptions = Apollo.BaseMutationOptions<CreateTokenMutation, CreateTokenMutationVariables>;
export const GetNewProjectsCountDocument = gql`
    query GetNewProjectsCount($category: Category!) {
  getNewProjectsCount(category: $category) {
    count
  }
}
    `;

/**
 * __useGetNewProjectsCountQuery__
 *
 * To run a query within a React component, call `useGetNewProjectsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewProjectsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewProjectsCountQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetNewProjectsCountQuery(baseOptions: Apollo.QueryHookOptions<GetNewProjectsCountQuery, GetNewProjectsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewProjectsCountQuery, GetNewProjectsCountQueryVariables>(GetNewProjectsCountDocument, options);
      }
export function useGetNewProjectsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewProjectsCountQuery, GetNewProjectsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewProjectsCountQuery, GetNewProjectsCountQueryVariables>(GetNewProjectsCountDocument, options);
        }
export type GetNewProjectsCountQueryHookResult = ReturnType<typeof useGetNewProjectsCountQuery>;
export type GetNewProjectsCountLazyQueryHookResult = ReturnType<typeof useGetNewProjectsCountLazyQuery>;
export type GetNewProjectsCountQueryResult = Apollo.QueryResult<GetNewProjectsCountQuery, GetNewProjectsCountQueryVariables>;
export const GetProjectDetailsDocument = gql`
    query GetProjectDetails($projectId: String!) {
  getProjectDetails(projectId: $projectId) {
    isUserRegistered
    id
    title
    category
    startDate
    endDate
    shortDescription
    longDescription
    themes
    tags
    techStack {
      name
      icon
    }
    createdAt
  }
}
    `;

/**
 * __useGetProjectDetailsQuery__
 *
 * To run a query within a React component, call `useGetProjectDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectDetailsQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetProjectDetailsQuery, GetProjectDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectDetailsQuery, GetProjectDetailsQueryVariables>(GetProjectDetailsDocument, options);
      }
export function useGetProjectDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectDetailsQuery, GetProjectDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectDetailsQuery, GetProjectDetailsQueryVariables>(GetProjectDetailsDocument, options);
        }
export type GetProjectDetailsQueryHookResult = ReturnType<typeof useGetProjectDetailsQuery>;
export type GetProjectDetailsLazyQueryHookResult = ReturnType<typeof useGetProjectDetailsLazyQuery>;
export type GetProjectDetailsQueryResult = Apollo.QueryResult<GetProjectDetailsQuery, GetProjectDetailsQueryVariables>;
export const GetProjectTasksForStudentDocument = gql`
    query GetProjectTasksForStudent($projectId: String!) {
  getProjectTasksForStudent(projectId: $projectId) {
    title
    approxTime
    id
    longDescription
    priority
    shortDescription
  }
}
    `;

/**
 * __useGetProjectTasksForStudentQuery__
 *
 * To run a query within a React component, call `useGetProjectTasksForStudentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectTasksForStudentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectTasksForStudentQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectTasksForStudentQuery(baseOptions: Apollo.QueryHookOptions<GetProjectTasksForStudentQuery, GetProjectTasksForStudentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectTasksForStudentQuery, GetProjectTasksForStudentQueryVariables>(GetProjectTasksForStudentDocument, options);
      }
export function useGetProjectTasksForStudentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectTasksForStudentQuery, GetProjectTasksForStudentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectTasksForStudentQuery, GetProjectTasksForStudentQueryVariables>(GetProjectTasksForStudentDocument, options);
        }
export type GetProjectTasksForStudentQueryHookResult = ReturnType<typeof useGetProjectTasksForStudentQuery>;
export type GetProjectTasksForStudentLazyQueryHookResult = ReturnType<typeof useGetProjectTasksForStudentLazyQuery>;
export type GetProjectTasksForStudentQueryResult = Apollo.QueryResult<GetProjectTasksForStudentQuery, GetProjectTasksForStudentQueryVariables>;
export const GetRegisteredProjectAfterEndDateDocument = gql`
    query GetRegisteredProjectAfterEndDate {
  getRegisteredProjectAfterEndDate {
    isUserRegistered
    id
    title
    category
    startDate
    endDate
    shortDescription
    longDescription
    themes
    tags
    techStack {
      name
      icon
    }
    createdAt
    registrationCount
    latestRegistered
  }
}
    `;

/**
 * __useGetRegisteredProjectAfterEndDateQuery__
 *
 * To run a query within a React component, call `useGetRegisteredProjectAfterEndDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegisteredProjectAfterEndDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegisteredProjectAfterEndDateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRegisteredProjectAfterEndDateQuery(baseOptions?: Apollo.QueryHookOptions<GetRegisteredProjectAfterEndDateQuery, GetRegisteredProjectAfterEndDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegisteredProjectAfterEndDateQuery, GetRegisteredProjectAfterEndDateQueryVariables>(GetRegisteredProjectAfterEndDateDocument, options);
      }
export function useGetRegisteredProjectAfterEndDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegisteredProjectAfterEndDateQuery, GetRegisteredProjectAfterEndDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegisteredProjectAfterEndDateQuery, GetRegisteredProjectAfterEndDateQueryVariables>(GetRegisteredProjectAfterEndDateDocument, options);
        }
export type GetRegisteredProjectAfterEndDateQueryHookResult = ReturnType<typeof useGetRegisteredProjectAfterEndDateQuery>;
export type GetRegisteredProjectAfterEndDateLazyQueryHookResult = ReturnType<typeof useGetRegisteredProjectAfterEndDateLazyQuery>;
export type GetRegisteredProjectAfterEndDateQueryResult = Apollo.QueryResult<GetRegisteredProjectAfterEndDateQuery, GetRegisteredProjectAfterEndDateQueryVariables>;
export const GetRegisteredProjectBeforeEndDateDocument = gql`
    query GetRegisteredProjectBeforeEndDate {
  getRegisteredProjectBeforeEndDate {
    isUserRegistered
    id
    title
    category
    startDate
    endDate
    shortDescription
    longDescription
    themes
    tags
    techStack {
      name
      icon
    }
    createdAt
    registrationCount
    latestRegistered
  }
}
    `;

/**
 * __useGetRegisteredProjectBeforeEndDateQuery__
 *
 * To run a query within a React component, call `useGetRegisteredProjectBeforeEndDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegisteredProjectBeforeEndDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegisteredProjectBeforeEndDateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRegisteredProjectBeforeEndDateQuery(baseOptions?: Apollo.QueryHookOptions<GetRegisteredProjectBeforeEndDateQuery, GetRegisteredProjectBeforeEndDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegisteredProjectBeforeEndDateQuery, GetRegisteredProjectBeforeEndDateQueryVariables>(GetRegisteredProjectBeforeEndDateDocument, options);
      }
export function useGetRegisteredProjectBeforeEndDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegisteredProjectBeforeEndDateQuery, GetRegisteredProjectBeforeEndDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegisteredProjectBeforeEndDateQuery, GetRegisteredProjectBeforeEndDateQueryVariables>(GetRegisteredProjectBeforeEndDateDocument, options);
        }
export type GetRegisteredProjectBeforeEndDateQueryHookResult = ReturnType<typeof useGetRegisteredProjectBeforeEndDateQuery>;
export type GetRegisteredProjectBeforeEndDateLazyQueryHookResult = ReturnType<typeof useGetRegisteredProjectBeforeEndDateLazyQuery>;
export type GetRegisteredProjectBeforeEndDateQueryResult = Apollo.QueryResult<GetRegisteredProjectBeforeEndDateQuery, GetRegisteredProjectBeforeEndDateQueryVariables>;
export const GetRegisteredProjectsCountDocument = gql`
    query GetRegisteredProjectsCount($category: Category!) {
  getRegisteredProjectsCount(category: $category) {
    count
  }
}
    `;

/**
 * __useGetRegisteredProjectsCountQuery__
 *
 * To run a query within a React component, call `useGetRegisteredProjectsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegisteredProjectsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegisteredProjectsCountQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetRegisteredProjectsCountQuery(baseOptions: Apollo.QueryHookOptions<GetRegisteredProjectsCountQuery, GetRegisteredProjectsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegisteredProjectsCountQuery, GetRegisteredProjectsCountQueryVariables>(GetRegisteredProjectsCountDocument, options);
      }
export function useGetRegisteredProjectsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegisteredProjectsCountQuery, GetRegisteredProjectsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegisteredProjectsCountQuery, GetRegisteredProjectsCountQueryVariables>(GetRegisteredProjectsCountDocument, options);
        }
export type GetRegisteredProjectsCountQueryHookResult = ReturnType<typeof useGetRegisteredProjectsCountQuery>;
export type GetRegisteredProjectsCountLazyQueryHookResult = ReturnType<typeof useGetRegisteredProjectsCountLazyQuery>;
export type GetRegisteredProjectsCountQueryResult = Apollo.QueryResult<GetRegisteredProjectsCountQuery, GetRegisteredProjectsCountQueryVariables>;
export const GetSubmissionFormDocument = gql`
    query GetSubmissionForm($projectId: String!) {
  getSubmissionForm(projectId: $projectId) {
    name
    required
    label
    placeholder
    inline
    type
    minRows
    options {
      label
      value
      key
    }
  }
}
    `;

/**
 * __useGetSubmissionFormQuery__
 *
 * To run a query within a React component, call `useGetSubmissionFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubmissionFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubmissionFormQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetSubmissionFormQuery(baseOptions: Apollo.QueryHookOptions<GetSubmissionFormQuery, GetSubmissionFormQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubmissionFormQuery, GetSubmissionFormQueryVariables>(GetSubmissionFormDocument, options);
      }
export function useGetSubmissionFormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubmissionFormQuery, GetSubmissionFormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubmissionFormQuery, GetSubmissionFormQueryVariables>(GetSubmissionFormDocument, options);
        }
export type GetSubmissionFormQueryHookResult = ReturnType<typeof useGetSubmissionFormQuery>;
export type GetSubmissionFormLazyQueryHookResult = ReturnType<typeof useGetSubmissionFormLazyQuery>;
export type GetSubmissionFormQueryResult = Apollo.QueryResult<GetSubmissionFormQuery, GetSubmissionFormQueryVariables>;
export const GetTechStacksDocument = gql`
    query GetTechStacks {
  getTechStacks {
    label
    icon
    _id
  }
}
    `;

/**
 * __useGetTechStacksQuery__
 *
 * To run a query within a React component, call `useGetTechStacksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTechStacksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTechStacksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTechStacksQuery(baseOptions?: Apollo.QueryHookOptions<GetTechStacksQuery, GetTechStacksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTechStacksQuery, GetTechStacksQueryVariables>(GetTechStacksDocument, options);
      }
export function useGetTechStacksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTechStacksQuery, GetTechStacksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTechStacksQuery, GetTechStacksQueryVariables>(GetTechStacksDocument, options);
        }
export type GetTechStacksQueryHookResult = ReturnType<typeof useGetTechStacksQuery>;
export type GetTechStacksLazyQueryHookResult = ReturnType<typeof useGetTechStacksLazyQuery>;
export type GetTechStacksQueryResult = Apollo.QueryResult<GetTechStacksQuery, GetTechStacksQueryVariables>;
export const GetUpcomingExternshipsDocument = gql`
    query GetUpcomingExternships($isRegistered: Boolean) {
  getUpcomingExternships(isRegistered: $isRegistered) {
    category
    createdAt
    endDate
    id
    isUserRegistered
    latestRegistered
    longDescription
    registrationCount
    shortDescription
    startDate
    tags
    techStack {
      icon
      name
    }
    themes
    title
  }
}
    `;

/**
 * __useGetUpcomingExternshipsQuery__
 *
 * To run a query within a React component, call `useGetUpcomingExternshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingExternshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingExternshipsQuery({
 *   variables: {
 *      isRegistered: // value for 'isRegistered'
 *   },
 * });
 */
export function useGetUpcomingExternshipsQuery(baseOptions?: Apollo.QueryHookOptions<GetUpcomingExternshipsQuery, GetUpcomingExternshipsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpcomingExternshipsQuery, GetUpcomingExternshipsQueryVariables>(GetUpcomingExternshipsDocument, options);
      }
export function useGetUpcomingExternshipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpcomingExternshipsQuery, GetUpcomingExternshipsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpcomingExternshipsQuery, GetUpcomingExternshipsQueryVariables>(GetUpcomingExternshipsDocument, options);
        }
export type GetUpcomingExternshipsQueryHookResult = ReturnType<typeof useGetUpcomingExternshipsQuery>;
export type GetUpcomingExternshipsLazyQueryHookResult = ReturnType<typeof useGetUpcomingExternshipsLazyQuery>;
export type GetUpcomingExternshipsQueryResult = Apollo.QueryResult<GetUpcomingExternshipsQuery, GetUpcomingExternshipsQueryVariables>;
export const GetUpcomingExternshipsCountDocument = gql`
    query GetUpcomingExternshipsCount {
  getUpcomingExternshipsCount {
    count
  }
}
    `;

/**
 * __useGetUpcomingExternshipsCountQuery__
 *
 * To run a query within a React component, call `useGetUpcomingExternshipsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingExternshipsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingExternshipsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUpcomingExternshipsCountQuery(baseOptions?: Apollo.QueryHookOptions<GetUpcomingExternshipsCountQuery, GetUpcomingExternshipsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpcomingExternshipsCountQuery, GetUpcomingExternshipsCountQueryVariables>(GetUpcomingExternshipsCountDocument, options);
      }
export function useGetUpcomingExternshipsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpcomingExternshipsCountQuery, GetUpcomingExternshipsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpcomingExternshipsCountQuery, GetUpcomingExternshipsCountQueryVariables>(GetUpcomingExternshipsCountDocument, options);
        }
export type GetUpcomingExternshipsCountQueryHookResult = ReturnType<typeof useGetUpcomingExternshipsCountQuery>;
export type GetUpcomingExternshipsCountLazyQueryHookResult = ReturnType<typeof useGetUpcomingExternshipsCountLazyQuery>;
export type GetUpcomingExternshipsCountQueryResult = Apollo.QueryResult<GetUpcomingExternshipsCountQuery, GetUpcomingExternshipsCountQueryVariables>;
export const GetUpcomingHackathonsDocument = gql`
    query GetUpcomingHackathons($isRegistered: Boolean) {
  getUpcomingHackathons(isRegistered: $isRegistered) {
    isUserRegistered
    id
    title
    category
    startDate
    endDate
    shortDescription
    longDescription
    themes
    tags
    registrationCount
    latestRegistered
    techStack {
      icon
      name
    }
    createdAt
  }
}
    `;

/**
 * __useGetUpcomingHackathonsQuery__
 *
 * To run a query within a React component, call `useGetUpcomingHackathonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingHackathonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingHackathonsQuery({
 *   variables: {
 *      isRegistered: // value for 'isRegistered'
 *   },
 * });
 */
export function useGetUpcomingHackathonsQuery(baseOptions?: Apollo.QueryHookOptions<GetUpcomingHackathonsQuery, GetUpcomingHackathonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpcomingHackathonsQuery, GetUpcomingHackathonsQueryVariables>(GetUpcomingHackathonsDocument, options);
      }
export function useGetUpcomingHackathonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpcomingHackathonsQuery, GetUpcomingHackathonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpcomingHackathonsQuery, GetUpcomingHackathonsQueryVariables>(GetUpcomingHackathonsDocument, options);
        }
export type GetUpcomingHackathonsQueryHookResult = ReturnType<typeof useGetUpcomingHackathonsQuery>;
export type GetUpcomingHackathonsLazyQueryHookResult = ReturnType<typeof useGetUpcomingHackathonsLazyQuery>;
export type GetUpcomingHackathonsQueryResult = Apollo.QueryResult<GetUpcomingHackathonsQuery, GetUpcomingHackathonsQueryVariables>;
export const GetUpcomingHackathonsCountDocument = gql`
    query GetUpcomingHackathonsCount {
  getUpcomingHackathonsCount {
    count
  }
}
    `;

/**
 * __useGetUpcomingHackathonsCountQuery__
 *
 * To run a query within a React component, call `useGetUpcomingHackathonsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingHackathonsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingHackathonsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUpcomingHackathonsCountQuery(baseOptions?: Apollo.QueryHookOptions<GetUpcomingHackathonsCountQuery, GetUpcomingHackathonsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpcomingHackathonsCountQuery, GetUpcomingHackathonsCountQueryVariables>(GetUpcomingHackathonsCountDocument, options);
      }
export function useGetUpcomingHackathonsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpcomingHackathonsCountQuery, GetUpcomingHackathonsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpcomingHackathonsCountQuery, GetUpcomingHackathonsCountQueryVariables>(GetUpcomingHackathonsCountDocument, options);
        }
export type GetUpcomingHackathonsCountQueryHookResult = ReturnType<typeof useGetUpcomingHackathonsCountQuery>;
export type GetUpcomingHackathonsCountLazyQueryHookResult = ReturnType<typeof useGetUpcomingHackathonsCountLazyQuery>;
export type GetUpcomingHackathonsCountQueryResult = Apollo.QueryResult<GetUpcomingHackathonsCountQuery, GetUpcomingHackathonsCountQueryVariables>;
export const GetUserProfileDocument = gql`
    query GetUserProfile {
  getUserProfile {
    _id
    name
    email
    educationDetails {
      instituteName
      batch
      percentage
      country
      state
    }
    projectDetails {
      projectName
      techStacks {
        name
        icon
      }
      dateOfCompletion
      deployedLink
      projectFile
    }
    personalDetails {
      profilePicture
      coverPhoto
      shortBio
      techStacks {
        name
        icon
      }
    }
  }
}
    `;

/**
 * __useGetUserProfileQuery__
 *
 * To run a query within a React component, call `useGetUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
      }
export function useGetUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
        }
export type GetUserProfileQueryHookResult = ReturnType<typeof useGetUserProfileQuery>;
export type GetUserProfileLazyQueryHookResult = ReturnType<typeof useGetUserProfileLazyQuery>;
export type GetUserProfileQueryResult = Apollo.QueryResult<GetUserProfileQuery, GetUserProfileQueryVariables>;
export const GetUserRegistrationDocument = gql`
    query GetUserRegistration($projectId: String!) {
  getUserRegistration(projectId: $projectId) {
    name
    email
    teamName
    team {
      name
      email
    }
  }
}
    `;

/**
 * __useGetUserRegistrationQuery__
 *
 * To run a query within a React component, call `useGetUserRegistrationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserRegistrationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserRegistrationQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetUserRegistrationQuery(baseOptions: Apollo.QueryHookOptions<GetUserRegistrationQuery, GetUserRegistrationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserRegistrationQuery, GetUserRegistrationQueryVariables>(GetUserRegistrationDocument, options);
      }
export function useGetUserRegistrationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserRegistrationQuery, GetUserRegistrationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserRegistrationQuery, GetUserRegistrationQueryVariables>(GetUserRegistrationDocument, options);
        }
export type GetUserRegistrationQueryHookResult = ReturnType<typeof useGetUserRegistrationQuery>;
export type GetUserRegistrationLazyQueryHookResult = ReturnType<typeof useGetUserRegistrationLazyQuery>;
export type GetUserRegistrationQueryResult = Apollo.QueryResult<GetUserRegistrationQuery, GetUserRegistrationQueryVariables>;