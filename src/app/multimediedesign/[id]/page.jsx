import SingleViewCard from "@/components/singleview/SingleViewCard";

const SingleViewPage = async ({ params }) => {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydGx2dHp2aHFsYWdmdGZ5aXVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjQ2MTgsImV4cCI6MjA2MTQ0MDYxOH0.LcJpZQ5_KTLCKfyZ9zD3a9kYx3IsKOXisyYFwds_95E";
  const res = await fetch(
    `https://qrtlvtzvhqlagftfyiuf.supabase.co/rest/v1/overview?id=eq.${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${key}`,
        apikey: key,
      },
    }
  );
  const data = await res.json();
  const item = data[0];

  if (!item) return <p>Item not found</p>;

  return (
    <section>
      <SingleViewCard item={item} />
    </section>
  );
};

export default SingleViewPage;
