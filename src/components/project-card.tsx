import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: readonly string[];
  coverImage: string;
  images: readonly string[];
  githubLink?: string;
  liveLink?: string;
  className?: string;
  onImageClick?: () => void;
}

export function ProjectCard({
  title,
  description,
  techStack,
  coverImage,
  images,
  githubLink,
  liveLink,
  className,
  onImageClick,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-white dark:bg-zinc-900",
        className
      )}

    >
      <div 
        className="relative overflow-hidden cursor-pointer group"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onImageClick?.();
        }}
      >
        <Image
          src={coverImage}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full object-cover object-top transition-transform duration-300 ease-in-out scale-100 group-hover:scale-[1.3]"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200" />
      </div>
      
      <CardHeader className="px-4 pt-4">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="px-4 flex-1">
        <div className="flex flex-wrap gap-1 mt-6">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs px-2 py-1"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4">
        <div className="flex gap-2 w-full">
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.github className="h-3 w-3" />
              GitHub
            </Link>
          )}
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icons.globe className="h-3 w-3" />
              Live Demo
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
