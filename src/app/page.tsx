'use client'
import { CertificateCard } from "@/components/certificate-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ImageCarouselModal } from "@/components/image-carousel-modal";
import Blogs from "@/components/Blogs";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import "aos/dist/aos.css";
import AOS from "aos";

import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    images: string[];
    title: string;
  }>({
    isOpen: false,
    images: [],
    title: "",
  });

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleImageClick = (images: readonly string[], title: string) => {
    setModalState({
      isOpen: true,
      images: [...images],
      title,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      images: [],
      title: "",
    });
  };


  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">

      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="AboutSection">
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
            <br />
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary2}
            </Markdown>
          </BlurFade>
        </section>
      </div>

      <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="AboutSection">
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </div>

      <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="AboutSection">
        <section id="projects">
          <div className="space-y-16 w-full">
            {/* Projects Delivered */}
            <div className="space-y-8">
              <BlurFade delay={BLUR_FADE_DELAY * 14}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                      Projects Delivered
                    </div>
                    <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                      Professional Work
                    </h2>
                  </div>
                </div>
              </BlurFade>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                {DATA.projects.delivered.map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      techStack={project.techStack}
                      coverImage={project.coverImage}
                      images={project.images}
                      onImageClick={() => handleImageClick(project.images, project.title)}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>

            {/* Personal Projects */}
            <div className="space-y-8">
              <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                      Personal Projects
                    </div>
                    <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                      Side Projects & Experiments
                    </h2>
                  </div>
                </div>
              </BlurFade>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                {DATA.projects.personal.map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 17 + id * 0.05}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      techStack={project.techStack}
                      coverImage={project.coverImage}
                      images={project.images}
                      githubLink={project.githubLink}
                      liveLink={project.liveLink}
                      onImageClick={() => handleImageClick(project.images, project.title)}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>


      <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="AboutSection">
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </div>

      <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="AboutSection">
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="AboutSection">
        <section id="certificates">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Certificates
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.certificates.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 13 + id * 0.05}
                  >
                    <CertificateCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      </div>


      <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200" className="AboutSection">
        <section id="blogs">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex space-y-2 flex-col items-center justify-center text-center">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Blogs
                </div>
                <h2 className="text-xl font-bold tracking-tighter sm:text-3xl">
                  My Latest Blogs
                </h2>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <ul className="mb-4 divide-y divide-dashed">
                <Blogs />
              </ul>
            </BlurFade>
          </div>
        </section>
      </div>

      {/* Image Carousel Modal */}
      <ImageCarouselModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        images={modalState.images}
        title={modalState.title}
      />
    </main>
  );
}
