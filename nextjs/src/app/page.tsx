"use client";

import Badges from "~/lib/components/pages/badges/Badges";
import LastActivities from "~/lib/components/pages/last activities/LastActivities";
import Footer from "~/lib/layouts/Footer";
import Header from "~/lib/layouts/Header";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

// Set up Apollo Client
const client = new ApolloClient({
  uri: "HASURA_GRAPHQL_ENDPOINT", // replace with  Hasura GraphQL endpoint
  cache: new InMemoryCache(),
});

const GET_LOGS = gql`
  query GetLogs {
    logs {
      transaction_hash
      decoded
      address
      block_number
      block_timestamp
      from
      to
    }
  }
`;

interface Log {
  transaction_hash: string;
  decoded: string;
  address: string;
  block_number: number;
  block_timestamp: string;
  from: string;
  to: string;
}

interface GetLogsData {
  logs: Log[];
}

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen w-full justify-center overflow-y-auto bg-elevation-bg-dark">
      <div className="flex min-h-screen w-full flex-col items-center bg-elevation-bg-dark lg:w-[1440px]">
        <Header />

        <div className="flex w-full flex-col items-center px-4 pb-[42px] pt-6 md:px-[112px] md:pt-[40px]">
          <div className="flex w-full flex-col gap-6">
            <LastActivities />

            <Badges />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
