import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  concat,
  createHttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import { showSnackbar } from "../utils/showSnackbar";

const httpLink = createHttpLink({ uri: process.env.REACT_APP_BASE_URL });

const errorLink = onError(({ graphQLErrors, networkError, 
  // response 
}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((error) => {
      showSnackbar({ msg: error.message, variant: "error" });
    });
  }

  if (networkError) {
    // handle network error
    console.log(networkError);
  }
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("authStudentToken");

  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }));

  return forward(operation);
});

const appLink = from([errorLink, httpLink]);

const client = new ApolloClient({
  link: concat(authMiddleware, appLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "ignore",
    },
  },
});

export default client;
