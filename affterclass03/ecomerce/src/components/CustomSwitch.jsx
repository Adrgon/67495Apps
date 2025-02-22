import React from "react";
import { Switch, StyleSheet, View } from "react-native";

const CustomSwitch = ({isEnabled = true, setIsEnabled = ()=>{}}) => {
  
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (

      <View style={styles.container}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomSwitch;
