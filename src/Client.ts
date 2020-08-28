import { ApolloClient, InMemoryCache, createHttpLink, gql, useQuery, ApolloQueryResult, NetworkStatus } from "@apollo/client";
import config from '../client_config.json';
import { setContext } from "@apollo/client/link/context";

export default class Client {
    private static internalClient: ApolloClient<any>;

    static async query(term: string, location: string): Promise<ApolloQueryResult<any>> {
        const termQuery = gql`
            query {
                search(term: "${term}" location: "${location}") {
                    total
                    business {
                            name
                            reviews {
                            text
                            rating
                        }
                    }
                }
            }
        `;

        try {
           const data = await  this.apolloClient.query({
                query: termQuery
            });

            return data;
        }
        catch(error) {
            console.log(error);
        }

        return {
            loading: false,
            networkStatus: NetworkStatus.error
        };
    }

    static get apolloClient(): ApolloClient<any> {
        this.internalClient = this.internalClient || this.create();
        return this.internalClient;
    }

    private static create(): ApolloClient<any> {
        const link = createHttpLink({ uri: 'https://api.yelp.com/v3/graphql' });
        const authLink = setContext((_, headers) => {
            return {
                headers: {
                    ...headers,
                    authorization: `Bearer ${config.api_key}`,
                }
            };
        });

        return new ApolloClient({
            cache: new InMemoryCache(),
            link: authLink.concat(link)
        });
    }
}