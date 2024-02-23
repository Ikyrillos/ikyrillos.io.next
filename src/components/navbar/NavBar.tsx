"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { Drawer } from "@mui/material";

const pages = ["Home", "Skills", "Portfolio", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [currentTap, setCurrentTap] = React.useState(0);

  console.log(currentTap, "currentTap");
  React.useEffect(() => {
    const currRoute = window.location.pathname;

    switch (currRoute) {
      case "/":
        setCurrentTap(0);
        break;
      case "/skills":
        setCurrentTap(1);
        break;
      case "/portfolio":
        setCurrentTap(2);
        break;
      case "/contact":
        setCurrentTap(3);
        break;
      default:
        setCurrentTap(0);
    }
  }, []);
  const [drawerState, setDrawerState] = React.useState(false);

  function toggleDrawer() {
    setDrawerState(!drawerState);
  }
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setDrawerState(true);
  };

  const handleCloseNavMenu = () => {
    setDrawerState(false);
  };
  return (
    <div>
      <AppBar
        position="sticky"
        style={{
          height: "70px",
          paddingTop: "2px",
          background:
            "linear-gradient(45deg,rgba(0, 6, 41, 0.9)  30%, #4db5ff  100%)",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              sx={{
                display: { xs: "block", md: "none" },
                transition: "all 0.3s",
              }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" onClick={() => setCurrentTap(0)}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  className="a"
                  sx={{
                    mr: 2,
                    display: "flex",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "white",
                    width: "100%",
                    textDecoration: "none",
                  }}
                >
                  KM
                </Typography>
              </Box>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {pages.map((page) => (
                <Link
                  href={
                    pages.indexOf(page) === 0
                      ? "/"
                      : `/${page.toLocaleLowerCase()}`
                  }
                  passHref
                  key={page}
                  style={{
                    marginLeft: 2,
                    marginRight: 2,
                    color: "white",
                    display: "block",
                    borderRadius: 4,
                    backgroundColor:
                      currentTap === pages.indexOf(page)
                        ? "rgba(77, 181, 255, 0.4)"
                        : "transparent",
                  }}
                >
                  <Button
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      setCurrentTap(pages.indexOf(page));
                    }}
                    sx={{
                      color: "white",
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <Drawer
              anchor={"left"}
              open={drawerState}
              onClose={() => setDrawerState(false)}
            >
              <div className="mt-20"></div>
              {pages.map((page) => (
                <Link
                  href={
                    pages.indexOf(page) === 0
                      ? "/"
                      : `/${page.toLocaleLowerCase()}`
                  }
                  passHref
                  key={page}
                >
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      setCurrentTap(pages.indexOf(page));
                    }}
                    className={
                      currentTap === pages.indexOf(page) ? "active" : ""
                    }
                    sx={{
                      // font color
                      width: "200px",
                      color: "black",
                      backgroundColor:
                        currentTap === pages.indexOf(page)
                          ? "rgba(77, 181, 255, 0.4)"
                          : "none",
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
