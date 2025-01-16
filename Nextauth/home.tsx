import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Only authenticated users can see this page.</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Dashboard;