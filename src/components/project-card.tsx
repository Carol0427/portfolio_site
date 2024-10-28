import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const OutlinedBox = styled(Box)(({ theme }) => ({
  border: `1px solid black`,
  padding: '6px 12px', // Adjust padding to make it look like a button
  borderRadius: '4px', // Optional: match the button's border radius
  display: 'inline-block',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer', // Optional: change cursor to pointer
  margin: '4px',
}));

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  tags?: string[];
}

export function ProjectCard({ img, title, desc, tags = [] }: ProjectCardProps) {
  const handleClick = () => {
    if(title == "AnonyVent"){
    window.open('https://anonyvent.xyz', '_blank');
    }
    else if(title == "LeafSafe"){
      window.open('https://leafsafe.xyz', '_blank');
      }
      else if(title == "FixItFund"){
        window.open('https://fixitfund.site', '_blank');
        }
  };
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}> {/* Optional: Flexbox for better layout */}
          {tags.map((tag, index) => (
            <OutlinedBox key={index}>
              {tag}
            </OutlinedBox>
          ))}
        </div>
      <br></br>
      <br></br>
        <Button color="gray" size="sm" onClick={handleClick}>
          Try it out!
        </Button>
        
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
