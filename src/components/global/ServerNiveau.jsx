import ClientNiveau from "./ClientNiveau";

const ServerNiveau = async () => {
  const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydGx2dHp2aHFsYWdmdGZ5aXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjQ2MTgsImV4cCI6MjA2MTQ0MDYxOH0.LcJpZQ5_KTLCKfyZ9zD3a9kYx3IsKOXisyYFwds_95E`;

  const [resKompetencer, resSprog, resFaerdigheder] = await Promise.all([
    fetch(`https://qrtlvtzvhqlagftfyiuf.supabase.co/rest/v1/kompetencer`, {
      headers: { Authorization: `Bearer ${key}`, apikey: key },
    }),
    fetch(`https://qrtlvtzvhqlagftfyiuf.supabase.co/rest/v1/sprog`, {
      headers: { Authorization: `Bearer ${key}`, apikey: key },
    }),

    fetch(`https://qrtlvtzvhqlagftfyiuf.supabase.co/rest/v1/faerdigheder`, {
      headers: { Authorization: `Bearer ${key}`, apikey: key },
    }),
  ]);

  const [kompetencer, sprog, faerdigheder] = await Promise.all([
    resKompetencer.json(),
    resSprog.json(),
    resFaerdigheder.json(),
  ]);
  return (
    <ClientNiveau
      kompetencer={kompetencer}
      faerdigheder={faerdigheder}
      sprog={sprog}
    />
  );
};

export default ServerNiveau;
