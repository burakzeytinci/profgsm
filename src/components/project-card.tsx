import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <Card className="border border-green-100/60 shadow-sm hover:shadow-lg hover:border-green-300 hover:-translate-y-1 hover:bg-white/80 transition-all duration-300 cursor-pointer group">
      <CardBody>
        <div className="h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            width={768}
            height={768}
            src={img}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <Typography variant="h5" color="green" className="font-semibold mb-2 group-hover:text-green-700 transition-colors duration-300">
          {title}
        </Typography>
        <Typography className="font-normal !text-gray-600 group-hover:!text-gray-800 transition-colors duration-300">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
