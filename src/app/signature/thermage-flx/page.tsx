import ThermageFlxView from "./ThermageFlxView";
import { getThermageFlxPageContent } from "@/i18n/thermageFlxPageContent";

const meta = getThermageFlxPageContent("ko");

export const metadata = {
  title: meta.metaTitle,
  description: meta.metaDescription,
};

export default function ThermageFlxPage() {
  return <ThermageFlxView />;
}
