import { useRouter } from "next/router";

const MovieDetail = () => {
  const router = useRouter();
  return (
    <div>
      <h4>{router.query.title}</h4>
    </div>
  );
};

export default MovieDetail;
