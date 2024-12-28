
require(["esri/config", "esri/Map", "esri/views/MapView"], (esriConfig, Map, MapView) => {
  esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurIwgM1VrBD4ijebOTcGmSd15KRFbQazFkgSiBgg04UkCOqeasC1zErcw1WMa1-5H00ZXVaBrS_6ui_fCUIVr_Es7nj1DA_rWJPrVdmN87gC3veAiZtMtjCGebL4ANz5MJPH1jIjGrsOugpHAjq59xauGSv1ALupBUGS-emuCQ4fJjdaS12tfMcsG-NKcf4AmnidNmwosJvefHleE5OmLkNI.AT1_76ENRuXc";

  const map = new Map({
    basemap: "topo-vector"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
  });

  console.log("Map is ready");
});
