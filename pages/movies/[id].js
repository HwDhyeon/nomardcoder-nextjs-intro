import { useRouter } from "next/router";

const MovieDetail = () => {
  const router = useRouter();
  return "Movie detail page. id: " + router.query.id;
};

export default MovieDetail;
