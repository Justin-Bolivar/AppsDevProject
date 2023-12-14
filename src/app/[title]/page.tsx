import MangaCard from "../components/MangaCard";



type Params = {
  params: {
    title: string;
  };
};

export default function titlePage({params: {title}}: Params) {
  return <MangaCard width={512} title={title} showDescription={true} />;
}