const themeConfig = {
  light: {
    token: {
      colorPrimary: "#00b96b",
      colorBgBase: "#fd79a8", // Nền sáng
      colorTextBase: "#000000", // Màu chữ
    },
  },
  dark: {
    token: {
        colorPrimary: "#00b96b",
        colorBgBase: "#000000", // Nền tối
      //   colorTextBase: "#ffffff", // Màu chữ
      colorBgLayout: "#ccc"
    },
    components: {
      Menu: {
        itemBg: "#121430", // Nền của item thường
        // itemHoverBg: "#111111", // Hover
        // itemSelectedBg: "#222222", // Item đang chọn
        itemColor: "#757b97", // Màu chữ
        // itemHoverColor: "#00b96b", // Hover chữ
        // itemSelectedColor: "#00ffcc", // Màu chữ item đang chọn
        popupBg: "#1a1a1a", // Nền của popup submenu
      },
    },
  },
};

export default themeConfig;
