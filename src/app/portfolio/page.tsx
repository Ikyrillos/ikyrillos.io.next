"use client";

import "./portfolio.css";

import { useCallback } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { getFirestore } from "firebase/firestore/lite";
import app from "../../services/firebase/firebase-app";
import { QueryClient, useQuery } from "react-query";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import SwipeableTextMobileStepper from "./Swipable";
import { FaGithub, FaGooglePlay } from "react-icons/fa";
import AnimatedContainer from "../../components/shared/AnimatedContainer";
//Portfolio function

type Project = {
  key: string;
  description: string;
  title: string;
  link: string;
  technologies: string;
  images: string[];
};

const Portfolio = () => {
  const db = getFirestore(app);
  const getPortfolios = useCallback(async () => {
    try {
      const projectsCol = collection(db, "projects");
      const projectSnapshot = await getDocs(projectsCol);
      const projectList = projectSnapshot.docs.map((doc) => doc.data());

      const mappedProjects = projectList.map((project) => ({
        key: project.link,
        description: project.description,
        title: project.title,
        link: project.link,
        technologies: project.technologies,
        images: project.images || [],
      }));

      // log linkes
      console.log(projectList.map((project) => project.link));
      console.log(mappedProjects); // Log the fetched and mapped data

      return mappedProjects;
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  }, [db]);

  const { isLoading, data } = useQuery<Project[]>("projects", getPortfolios);

  const projects = data || [];

  /// this code is to filter the projects and put the ones with images first
  projects.sort((a, b) => {
    if (a.images.length > b.images.length) return -1;
    if (a.images.length < b.images.length) return 1;
    return 0;
  });

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <AnimatedContainer>
      <section id="portfolio" className="margin-top">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <Container sx={{}} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map((pro) => (
              <Grid
                item
                key={pro.description}
                xs={12}
                sm={6}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SwipeableTextMobileStepper images={pro.images} />
                  <CardContent sx={{ flexGrow: 1, mb: 4, width: "100%" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        marginTop: "0",
                      }}
                    >
                      {pro.title}
                    </Typography>
                    <Typography
                      sx={{
                        textOverflow: "ellipsis",
                        width: "100%",
                        // make max lines three then add ellipsis
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {pro.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      px: 2,
                    }}
                  >
                    {pro.link.includes("play") ? (
                      <IconButton size="medium" href={pro.link} target="_blank">
                        <FaGooglePlay />
                      </IconButton>
                    ) : null}
                    {pro.link.includes("github") ? (
                      <IconButton size="medium" href={pro.link} target="_blank">
                        <FaGithub />
                      </IconButton>
                    ) : null}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </AnimatedContainer>
  );
};

export default Portfolio;
