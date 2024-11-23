import { redirect } from "next/navigation";

const HomePage = () => {
  // Questa pagina non sarà mai visualizzata
  redirect("/movies");
  return null;
};

export default HomePage;
