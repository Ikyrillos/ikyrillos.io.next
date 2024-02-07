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
      <section id="contact" className="margin-top">
        <h5
          style={{
            fontSize: "1rem",
          }}
        >
          Get In Touch
        </h5>
        <h5
          style={{
            fontSize: "1rem",
          }}
        >
          I do receive your messages and will respond asap if the valid email is
          provided :)
        </h5>
        <h2
          style={{
            marginBottom: "8px",
          }}
        >
          Contact Me
        </h2>
        <Grid>
          <Card
            style={{ maxWidth: 450, padding: "14px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
                sx={{
                  mb: 2,
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
                      type="submit"
                      variant="contained"
                      color="primary"
                      // mailto
                      href={`mailto:${
                        info.email
                      }?subject=Inquiry%20from%20${name}%20${lastName}&body=${content}%20${"Phone:%20"}${phone}`}
                      fullWidth
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
