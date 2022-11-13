export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/890293133236133939/1012361541695320214/AVA_Logo_1000px.png",
      name: "Ava Software",
      description:
        "Use Cheats Developed For Some Games, Get Information About Them Or Ask How To Do It.",
      link: "https://discord.gg/mxqwkkPTm5",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/890293133236133939/1012362434255790210/EFX_-_Renk_-_Black.png",
      name: "Youtube",
      description:
        "Game Videos Coming Soon!",
      link: "https://www.youtube.com/channel/UCcK1utqi5V_1uIuQHNe6lLw",
    },
     {
      id: 3,
      image: "https://cdn.discordapp.com/attachments/890293133236133939/1012362788267630694/efx_styla.png",
      name: "Instagram",
      description:
        "I Will Share... Stay Followed!",
      link: "https://instagram.com/efx.mkv/",
    }
  ];
  res.status(200).json(data);
};
