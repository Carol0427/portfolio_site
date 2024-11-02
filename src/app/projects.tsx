import { ProjectCard } from "@/components";

const PROJECTS = [
  {
    img: "/image/retrotape.png",
    title: "AnonyVent",
    desc: "The site for anonymous venting",
    tags: ["React", "Node", "AWS S3", "Mongo", "ChatGPT API", "Assembly AI API", "Netlify", "Heroku"],
  },
  {
    img: "/image/leafsafe.png",
    title: "LeafSafe",
    desc: "Poisonous plant detector",
    tags: ["Next", "ChatGPT API", "AWS EC2", "Route 52", "NGINX"],
  },
  {
    img: "/image/fixitfund.png",
    title: "FixItFund",
    desc: "Go-Fund Me but for public infrastrucutre",
    tags: ["Next", "Mongo", "Mapbox API", "AWS EC2", "Route 52", "NGINX"],
  },
  {
    img: "/image/floodsensefr.png",
    title: "FloodSense",
    desc: "Dashboards for flood monitoring data from sensors set up in broward county",
    tags: ["React", "Go", "Grafana", "Telegraf", "InfluxDB", "AWS EC2"]
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Projects
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;