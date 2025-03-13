import { Image, StyleSheet, View } from "react-native";
import React from "react";


const MapPreview = ({ location }) => {


  return (
    <View style={styles.mapPreview}>
      <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: 300,
    height: 300,
  },
});
