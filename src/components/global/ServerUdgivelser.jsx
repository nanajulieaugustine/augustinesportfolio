import ClientUdgivelser from "./ClientUdgivelser";

const ServerUdgivelser = async () => {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydGx2dHp2aHFsYWdmdGZ5aXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjQ2MTgsImV4cCI6MjA2MTQ0MDYxOH0.LcJpZQ5_KTLCKfyZ9zD3a9kYx3IsKOXisyYFwds_95E";

  const resUdgivelser = await fetch(
    `https://qrtlvtzvhqlagftfyiuf.supabase.co/rest/v1/udgivelser`,
    {
      headers: {
        Authorization: `Bearer ${key}`,
        apikey: key,
      },
    }
  );

  const udgivelser = await resUdgivelser.json();

  return <ClientUdgivelser udgivelser={udgivelser} />;
};

export default ServerUdgivelser;
