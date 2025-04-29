import Client from "./Client";

const Server = async () => {
  const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydGx2dHp2aHFsYWdmdGZ5aXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjQ2MTgsImV4cCI6MjA2MTQ0MDYxOH0.LcJpZQ5_KTLCKfyZ9zD3a9kYx3IsKOXisyYFwds_95E`;

  const [resUddannelser, resKurser] = await Promise.all([
    fetch(`https://qrtlvtzvhqlagftfyiuf.supabase.co/rest/v1/uddannelse`, {
      headers: { Authorization: `Bearer ${key}`, apikey: key },
    }),
    fetch(`https://qrtlvtzvhqlagftfyiuf.supabase.co/rest/v1/kurser`, {
      headers: { Authorization: `Bearer ${key}`, apikey: key },
    }),
  ]);

  const [uddannelser, kurser] = await Promise.all([
    resUddannelser.json(),
    resKurser.json(),
  ]);

  return <Client uddannelser={uddannelser} kurser={kurser} />;
};

export default Server;
