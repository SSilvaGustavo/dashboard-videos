import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export function Event() {
  const { isMobile } = useContext(AppContext);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    document.title = `Dashboard • Aulas`;
  }, []);

  return (
    <div className="flex flex-col min-h-screen animate-[fade-in-forward_0.5s_ease-in-out_both_0.2s]">
      <Header />
      <main className="flex max-lg:flex-col">
        {slug ? <Video lessonSlug={slug} /> : <Video lessonSlug={"aula-01"} />}
        {!isMobile && <Sidebar />}
      </main>
    </div>
  );
}
