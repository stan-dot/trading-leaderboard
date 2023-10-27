import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps = (async (context) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: Repo;
}>;

export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return repo.stargazers_count;
}
