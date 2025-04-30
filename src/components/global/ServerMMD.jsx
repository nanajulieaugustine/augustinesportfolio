import ClientMMD from "./ClientMMD";

const ServerMMD = async () => {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydGx2dHp2aHFsYWdmdGZ5aXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjQ2MTgsImV4cCI6MjA2MTQ0MDYxOH0.LcJpZQ5_KTLCKfyZ9zD3a9kYx3IsKOXisyYFwds_95E";

  const resMMDList = await fetch(
    `https://qrtlvtzvhqlagftfyiuf.supabase.co/rest/v1/overview`,
    {
      headers: {
        Authorization: `Bearer ${key}`,
        apikey: key,
      },
    }
  );

  const allOverviews = await resMMDList.json();

  const webudvikling = allOverviews.filter(
    (item) => item.category === "webudvikling"
  );

  const contentcreation = allOverviews.filter(
    (item) => item.category === "content creation"
  );

  const fotografering = allOverviews.filter(
    (item) => item.category === "fotografering"
  );

  const design = allOverviews.filter((item) => item.category === "design");

  return (
    <ClientMMD
      webudvikling={webudvikling}
      contentcreation={contentcreation}
      fotografering={fotografering}
      design={design}
    />
  );
};

export default ServerMMD;
