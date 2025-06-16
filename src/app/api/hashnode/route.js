import { NextResponse } from "next/server";

const auth = "5dc8263c-77e2-4e97-ac8d-f1fa4bfdc62f";

const GET_USER_BLOG = `query Publication {
  publication(host: "ayushmangarg.hashnode.dev") {
    isTeam
    title
    posts(
      first: 3
    ) {
      edges {
        node {
          id
          title
          brief
          slug
          url
          publishedAt
          updatedAt
          readTimeInMinutes
          reactionCount
          responseCount
          views
          coverImage {
            url
          }
          tags {
            id
            name
            slug
          }
          author {
            name
            username
            profilePicture
          }
          featured
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}`;

async function gql(query, variables = {}) {
  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const errorDetails = await response.text();
    throw new Error(`HTTP error! status: ${response.status}, details: ${errorDetails}`);
  }

  return response.json();
}

export async function GET() {
  try {
    const data = await gql(GET_USER_BLOG);
    return NextResponse.json(data); 
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data", details: error.message },
      { status: 500 }
    );
  }
}
