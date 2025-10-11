"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  Call,
  ConnectWithoutContact,
  Email,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import AttachmentIcon from "@mui/icons-material/Attachment";
const actions = [
  {
    icon: <AttachmentIcon />,
    name: "Resume",
    url: "https://drive.google.com/file/d/1eknKR-kucvkrW7UvOObYMts695yrpZx0/view?usp=sharing",
    bgcolorG: "linear-gradient(45deg, #0077B5, #004471)",
    color: "#fff",
  },
  {
    icon: <Email />,
    name: "Mail Us",
    url: "mailto:md.faizan.ahmad.web@gmail.com",
    bgcolorG: "linear-gradient(45deg, #D93025, #FBBC05)",
    color: "#fff",
  },
  {
    icon: <WhatsApp />,
    name: "Whatsapp Us",
    url: "https://wa.me/+917563092029",
    bgcolorG: "linear-gradient(45deg, #25D366, #075E54)",
    color: "#fff",
  },
  {
    icon: <LinkedIn />,
    name: "Lets Connect",
    url: "https://www.linkedin.com/in/mdfaizandahmad/",
    bgcolorG: "linear-gradient(45deg, #0077B5, #004471)",
    color: "#fff",
  },
  // {
  //   icon: <Instagram />,
  //   name: "DM Us",
  //   url: "https://www.instagram.com/devlensx/",
  //   bgcolorG:
  //     "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
  //   color: "#fff",
  // },

  {
    icon: <Call />,
    name: "Call Us",
    url: "tel:+917563092029",
    bgcolorG: "linear-gradient(45deg, #25D366, #4285F4)",
    color: "#fff",
  },
];

const SocialLink = () => {
  return (
    <Box>
      <SpeedDial
        ariaLabel="Social Links "
        sx={{
          position: "fixed",
          bottom: 45,
          right: 20,
        }}
        icon={<ConnectWithoutContact />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => window.open(action.url, "_blank")}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{
              backgroundImage: `${action.bgcolorG}`,
              color: `${action.color}`,
              boxShadow: `2px 2px 5px black`,
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default SocialLink;
