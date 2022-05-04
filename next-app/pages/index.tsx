import Homepage from "../components/Homepage";
import api from "../api/api-service";

type Props = {
  sections: Array<{
    id: string;
    movies: Array<{
      _id: string;
      id: number;
      title: string;
      year: number;
      runtime: number;
      genres: string[];
      director: string;
      actors: string;
      plot: string;
      posterUrl: string;
    }>;
    assets: string[];
    title: string;
    type: string;
    img: string;
    text: string;
  }>;
};

const Home = (props: Props) => {
  const { sections } = props;
  return <Homepage sections={sections} />;
};

export default Home;

export const getStaticProps = async () => {
  const sections = await api.get(`/sections`);

  return {
    props: { sections: sections },
  };
};
