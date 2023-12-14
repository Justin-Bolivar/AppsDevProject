import MangaCard from "../components/MangaCard";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


type Params = {
  params: {
    title: string;
  };
};

export default function titlePage({params: {title}}: Params) {
  return <MangaCard width={512} title={title} showDescription={true} />;
}