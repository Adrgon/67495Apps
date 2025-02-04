import React from 'react'
import { StyleSheet, Text, View, Modal, Button } from 'react-native'

const CustomModal = ({
    modalVisible, 
    itemSelected, 
    handleCancelModal, 
    handleDelete}) => {
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalStyles}>
        <View style={styles.modalContainer}>
          <Text style={styles.textModal}> Estas seguro que queres borrar</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textModal}> {itemSelected.value}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button title="Borrar" color="#ff5555" onPress={handleDelete} />
          <Button
            title="Cancelar"
            color="#55ff55"
            onPress={handleCancelModal}
          />
        </View>
      </View>
    </Modal>
  );
}

export default CustomModal

const styles = StyleSheet.create({
  modalStyles: {
    backgroundColor: "#401F71",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    alignContent: "center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 8,
  },
  textContainer: {},

  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  textModal: {
    fontWeight: "bold",
  },
});
