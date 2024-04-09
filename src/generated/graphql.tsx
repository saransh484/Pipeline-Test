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
  Date: { input: Date; output: Date; }
};

export enum Category {
  Externship = 'EXTERNSHIP',
  Hackathon = 'HACKATHON'
}

export type Count = {
  __typename?: 'Count';
  count?: Maybe<Scalars['Int']['output']>;
};

export type EducationInput = {
  batch?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  instituteName?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type File = {
  base64String: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
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
  createProject?: Maybe<Project>;
  createTag?: Maybe<Tags>;
  createTask?: Maybe<Tasks>;
  createTechStack?: Maybe<TechStacks>;
  createTheme?: Maybe<Themes>;
  deleteTag?: Maybe<UpdateRes>;
  deleteTechStack?: Maybe<UpdateRes>;
  deleteTheme?: Maybe<UpdateRes>;
  mentorLogin?: Maybe<MentorAuthPayload>;
  mentorSignup?: Maybe<MentorAuthPayload>;
  registerHackathon?: Maybe<Registration>;
  updateStudentDetails?: Maybe<UpdateRes>;
  updateTask?: Maybe<UpdateRes>;
  userLogin?: Maybe<UserAuthPayload>;
  userSignup?: Maybe<UserAuthPayload>;
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


export type MutationDeleteTagArgs = {
  tagId: Scalars['String']['input'];
};


export type MutationDeleteTechStackArgs = {
  techId: Scalars['String']['input'];
};


export type MutationDeleteThemeArgs = {
  themeId: Scalars['String']['input'];
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
  longDescription: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  startDate: Scalars['Date']['output'];
  tags: Array<Maybe<Scalars['String']['output']>>;
  techStack: Array<Maybe<TechStack>>;
  themes: Array<Maybe<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
};

export type ProjectInput = {
  dateOfCompletion?: InputMaybe<Scalars['String']['input']>;
  deployedLink?: InputMaybe<Scalars['String']['input']>;
  projectFile?: InputMaybe<File>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  techStacks?: InputMaybe<Array<InputMaybe<TechStackInput>>>;
};

export type Query = {
  __typename?: 'Query';
  getActiveExternships?: Maybe<Array<Maybe<Project>>>;
  getActiveHackathons?: Maybe<Array<Maybe<Project>>>;
  getAllTasks?: Maybe<Array<Maybe<Tasks>>>;
  getMentorProfile?: Maybe<Mentor>;
  getMentors?: Maybe<Array<Maybe<Mentor>>>;
  getProjectDetails?: Maybe<Project>;
  getProjectTasks?: Maybe<Array<Maybe<Tasks>>>;
  getProjects?: Maybe<Array<Maybe<Project>>>;
  getProjectsCount?: Maybe<Count>;
  getTags?: Maybe<Array<Maybe<Tags>>>;
  getTechStacks?: Maybe<Array<Maybe<TechStacks>>>;
  getThemes?: Maybe<Array<Maybe<Themes>>>;
  getUserProfile?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetProjectDetailsArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryGetProjectTasksArgs = {
  projectId: Scalars['String']['input'];
};


export type QueryGetProjectsArgs = {
  category: Category;
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
};

export enum RegistrationType {
  Individual = 'INDIVIDUAL',
  Team = 'TEAM'
}

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
  priority: Scalars['String']['output'];
  project: Project;
  shortDescription: Scalars['String']['output'];
  title: Scalars['String']['output'];
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

export type UserLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin?: { __typename?: 'UserAuthPayload', token?: string | null, user: { __typename?: 'User', _id?: string | null, name?: string | null, email?: string | null, educationDetails?: Array<{ __typename?: 'IEducationDetails', instituteName?: string | null, batch?: string | null, percentage?: string | null, country?: string | null, state?: string | null } | null> | null, projectDetails?: Array<{ __typename?: 'IProjectDetails', projectName?: string | null, dateOfCompletion?: string | null, deployedLink?: string | null, projectFile?: string | null, techStacks?: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> | null } | null> | null, personalDetails?: { __typename?: 'IPersonalDetails', profilePicture?: string | null, coverPhoto?: string | null, shortBio?: string | null, techStacks?: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> | null } | null } } | null };

export type RegisterHackathonMutationVariables = Exact<{
  projectId: Scalars['String']['input'];
  registrationType: RegistrationType;
  registrationFor: Category;
}>;


export type RegisterHackathonMutation = { __typename?: 'Mutation', registerHackathon?: { __typename?: 'Registration', id: string, name: string, email: string, registrationFor: Category, registrationType: RegistrationType } | null };

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

export type GetActiveExternshipsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveExternshipsQuery = { __typename?: 'Query', getActiveExternships?: Array<{ __typename?: 'Project', id: string, title: string, category: Category, startDate: Date, endDate: Date, shortDescription: string, longDescription: string, themes: Array<string | null>, tags: Array<string | null>, createdAt?: Date | null, techStack: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> } | null> | null };

export type GetActiveHackathonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveHackathonsQuery = { __typename?: 'Query', getActiveHackathons?: Array<{ __typename?: 'Project', id: string, title: string, category: Category, startDate: Date, endDate: Date, shortDescription: string, longDescription: string, themes: Array<string | null>, tags: Array<string | null>, createdAt?: Date | null, techStack: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> } | null> | null };

export type GetProjectDetailsQueryVariables = Exact<{
  projectId: Scalars['String']['input'];
}>;


export type GetProjectDetailsQuery = { __typename?: 'Query', getProjectDetails?: { __typename?: 'Project', id: string, title: string, category: Category, startDate: Date, endDate: Date, shortDescription: string, longDescription: string, themes: Array<string | null>, tags: Array<string | null>, createdAt?: Date | null, techStack: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> } | null };

export type GetTechStacksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTechStacksQuery = { __typename?: 'Query', getTechStacks?: Array<{ __typename?: 'TechStacks', label?: string | null, icon?: string | null, _id?: string | null } | null> | null };

export type GetUserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProfileQuery = { __typename?: 'Query', getUserProfile?: { __typename?: 'User', _id?: string | null, name?: string | null, email?: string | null, educationDetails?: Array<{ __typename?: 'IEducationDetails', instituteName?: string | null, batch?: string | null, percentage?: string | null, country?: string | null, state?: string | null } | null> | null, projectDetails?: Array<{ __typename?: 'IProjectDetails', projectName?: string | null, dateOfCompletion?: string | null, deployedLink?: string | null, projectFile?: string | null, techStacks?: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> | null } | null> | null, personalDetails?: { __typename?: 'IPersonalDetails', profilePicture?: string | null, coverPhoto?: string | null, shortBio?: string | null, techStacks?: Array<{ __typename?: 'TechStack', name: string, icon: string } | null> | null } | null } | null };


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
    mutation RegisterHackathon($projectId: String!, $registrationType: RegistrationType!, $registrationFor: Category!) {
  registerHackathon(
    projectId: $projectId
    registrationType: $registrationType
    registrationFor: $registrationFor
  ) {
    id
    name
    email
    registrationFor
    registrationType
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
export const GetActiveExternshipsDocument = gql`
    query GetActiveExternships {
  getActiveExternships {
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
 * __useGetActiveExternshipsQuery__
 *
 * To run a query within a React component, call `useGetActiveExternshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveExternshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveExternshipsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveExternshipsQuery(baseOptions?: Apollo.QueryHookOptions<GetActiveExternshipsQuery, GetActiveExternshipsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActiveExternshipsQuery, GetActiveExternshipsQueryVariables>(GetActiveExternshipsDocument, options);
      }
export function useGetActiveExternshipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveExternshipsQuery, GetActiveExternshipsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActiveExternshipsQuery, GetActiveExternshipsQueryVariables>(GetActiveExternshipsDocument, options);
        }
export type GetActiveExternshipsQueryHookResult = ReturnType<typeof useGetActiveExternshipsQuery>;
export type GetActiveExternshipsLazyQueryHookResult = ReturnType<typeof useGetActiveExternshipsLazyQuery>;
export type GetActiveExternshipsQueryResult = Apollo.QueryResult<GetActiveExternshipsQuery, GetActiveExternshipsQueryVariables>;
export const GetActiveHackathonsDocument = gql`
    query GetActiveHackathons {
  getActiveHackathons {
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
 * __useGetActiveHackathonsQuery__
 *
 * To run a query within a React component, call `useGetActiveHackathonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActiveHackathonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActiveHackathonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetActiveHackathonsQuery(baseOptions?: Apollo.QueryHookOptions<GetActiveHackathonsQuery, GetActiveHackathonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActiveHackathonsQuery, GetActiveHackathonsQueryVariables>(GetActiveHackathonsDocument, options);
      }
export function useGetActiveHackathonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActiveHackathonsQuery, GetActiveHackathonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActiveHackathonsQuery, GetActiveHackathonsQueryVariables>(GetActiveHackathonsDocument, options);
        }
export type GetActiveHackathonsQueryHookResult = ReturnType<typeof useGetActiveHackathonsQuery>;
export type GetActiveHackathonsLazyQueryHookResult = ReturnType<typeof useGetActiveHackathonsLazyQuery>;
export type GetActiveHackathonsQueryResult = Apollo.QueryResult<GetActiveHackathonsQuery, GetActiveHackathonsQueryVariables>;
export const GetProjectDetailsDocument = gql`
    query GetProjectDetails($projectId: String!) {
  getProjectDetails(projectId: $projectId) {
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