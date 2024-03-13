const uiConfigs = {
  style: {
    gradientBgImage: {
      dark: {
        backgroundImage:
          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
      },
    },

    backgroundImage: (imgPath: string) => ({
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "darkgrey",
      backgroundImage: `url(${imgPath})`,
    }),
  },
  size: {
    sidebarWith: "300px",
    contentMaxWidth: "1366px",
  },
};

export default uiConfigs;
