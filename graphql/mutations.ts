import { gql } from "graphql-request";
import { client } from "./client";

export const MakeWebContact = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const mutation = gql`
      mutation CreateWebContact{
        createWebContact(data: { name: "${name}", email: "${email}", message: "${message}" }) {
          id
          name
          email
          message
        }
      }
    `;

  const data = await client.request(mutation);

  return data.createWebContact;
};
