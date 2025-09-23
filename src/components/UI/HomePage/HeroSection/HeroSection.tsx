"use client";

import DoneIcon from "@mui/icons-material/Done";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import homeBanner from "../../../../assets/home-banner.jpg";

// Small, reusable feature chip
const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={1.25}
    sx={(theme) => ({
      px: 1.75,
      py: 0.875,
      borderRadius: 999,
      bgcolor: "rgba(255,255,255,0.06)",
      border: "1px solid",
      borderColor: "rgba(255,255,255,0.14)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      boxShadow:
        "0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 24px rgba(0,0,0,0.25)",
      transition: "transform 200ms ease",
      "&:hover": { transform: "translateY(-2px)" },
    })}>
    <DoneIcon fontSize="small" sx={{ color: "secondary.main" }} />
    <Typography
      variant="subtitle1"
      sx={{
        color: "text.secondary",
        fontWeight: 700,
        letterSpacing: 0,
        lineHeight: 1.2,
      }}>
      {children}
    </Typography>
  </Stack>
);

const HeroSection = () => {
  
  return (
    <Box
      component="section"
      aria-label="Lost and Found hero"
      sx={(theme) => ({
        position: "relative",
        width: "100%",
        minHeight: { xs: 560, sm: 620, md: 760 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: {
          xs: `calc(${theme.mixins.toolbar.minHeight}px + 8px)`,
          sm: `calc(${theme.mixins.toolbar.minHeight}px + 8px)`,
          md: 0, // large screens OK as-is
        },
        // Create a layered background with the image + gradient + subtle grid
        "--overlay": "linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78))",
        backgroundColor: theme.palette.background.default,
      })}>
      {/* Background image using next/image for performance */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src={homeBanner}
          alt="Abstract background"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78))",
          }}
        />
        {/* Subtle grid pattern for depth (auto adapts to dark) */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.14,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            mixBlendMode: "overlay",
          }}
        />
        {/* Radial glows */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 40% at 50% 20%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%), radial-gradient(40% 30% at 20% 20%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)",
          }}
        />
      </Box>

      {/* Decorative corner glow */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: { xs: "-20%", md: "-10%" },
          bottom: { xs: "-20%", md: "-10%" },
          width: { xs: 380, sm: 520, md: 680 },
          height: { xs: 380, sm: 520, md: 680 },
          background: (theme) =>
            `radial-gradient(closest-side, ${theme.palette.secondary.main}33, transparent 70%)`,
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction="column"
          spacing={{ xs: 3, md: 5 }}
          sx={{
            textAlign: { xs: "center", md: "left" },
            alignItems: { xs: "center", md: "flex-start" },
          }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "secondary.main",
              // fluid type scale
              fontSize: {
                xs: "clamp(1.5rem, 6vw, 1.75rem)",
                sm: "clamp(2.5rem, 6vw, 3.25rem)",
                md: "clamp(3rem, 5vw, 4rem)",
              },
              textShadow: "0 8px 20px rgba(0,0,0,0.45)",
            }}>
            solve the Campus Related Problems
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 800,
              lineHeight: 1.5,
              fontWeight: 500,
              opacity: 0.9,
              px: { xs: 1, md: 0 },
            }}>
            Streamline intake, matching, and returns—on a single, privacy-first
            platform designed for teams and loved by customers.
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1.25}
            useFlexGap
            flexWrap="wrap">
            <FeatureItem>60% time-saving on found items</FeatureItem>
            <FeatureItem>One centralized and standardized platform</FeatureItem>
            <FeatureItem>Ultimate user experience</FeatureItem>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 1 }}>
            <Link href="/submit-lost-items" passHref legacyBehavior>
              <Button
                component="a"
                size="large"
                sx={{
                  px: 3.5,
                  py: 1.35,
                  fontWeight: 800,
                  borderRadius: 999,
                  textTransform: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                  backgroundColor: "text.secondary",
                  color: "text.primary",
                  transition: "transform 180ms ease, box-shadow 180ms ease",
                  "&:hover": {
                    backgroundColor: "text.secondary",
                    transform: "translateY(-2px)",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.4)",
                  },
                  "&:active": { transform: "translateY(0)" },
                }}>
                Report a Lost Item
              </Button>
            </Link>

            <Link href="/submit-found-items" passHref legacyBehavior>
              <Button
                component="a"
                size="large"
                variant="outlined"
                sx={{
                  px: 3.5,
                  py: 1.35,
                  fontWeight: 800,
                  borderRadius: 999,
                  textTransform: "none",
                  borderWidth: 2,
                  borderColor: "rgba(255,255,255,0.6)",
                  color: "text.secondary",
                  backgroundColor: "white",
                  transition: "transform 180ms ease, box-shadow 180ms ease",
                  "&:hover": {
                    backgroundColor: "white",
                    borderColor: "rgba(255,255,255,0.9)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.2)",
                  },
                  "&:active": { transform: "translateY(0)" },
                }}>
                Report a Found Item
              </Button>
            </Link>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: "text.disabled",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}>
            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "inline" } }}>
              Secure
            </Box>
            <Box component="span" aria-hidden>
              •
            </Box>
            Fast
            <Box component="span" aria-hidden>
              •
            </Box>
            GDPR-friendly
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
