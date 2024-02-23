"use client";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AnimatedContainer from "../../components/shared/AnimatedContainer";
import "./contact.css";
import { useState } from "react";
import { info } from "../../models/info";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [content, setContent] = useState("Contact Me");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <AnimatedContainer>
      <section id="contact" className="lg:mt-8 md:mt-8">
        <h5 className="text-xl text-white">Get In Touch</h5>
        <h5 className="text-xl text-white sm: px-5">
          I do receive your messages and will respond asap if the valid email is
          provided :)
        </h5>
        <h2>Contact Me</h2>
        <Grid
          className="text-center p-5 lg:w-1/2 flex justify-center items-center mx-auto h-full"
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
        >
          <Card>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
                sx={{
                  fontSize: "1rem",
                }}
              >
                Fill up the form and I will get back to you within 24 hours.
              </Typography>
              <form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      placeholder="Enter first name"
                      label="First Name"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      placeholder="Enter last name"
                      label="Last Name"
                      variant="outlined"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      placeholder="Enter phone number"
                      label="Phone"
                      variant="outlined"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      multiline
                      rows={4}
                      placeholder="Type your message here"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#f50057",
                        border: "solid",
                        "&:hover": {
                          backgroundColor: "#42b883",
                          color: "white",
                        },
                      }}
                      type="submit"
                      // mailto
                      href={`mailto:${
                        info.email
                      }?subject=Inquiry%20from%20${name}%20${lastName}&body=${content}%20${"Phone:%20"}${phone}`}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </section>
    </AnimatedContainer>
  );
};

export default Contact;
