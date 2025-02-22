import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../../constants/variables";
import Button from "../Button/Button";
import common from "./../../../constants/Styles";

interface AlertProps {
  show: boolean;
  onClose: any;
  onConfirm: any;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { onClose, onConfirm, show } = props;
  return show ? (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: colors.background,
        width: "100%",
        zIndex: 100,
        padding: 20,
      }}
    >
      <Text style={[common.text, common.md, { marginBottom: 20 }]}>
        Are you sure?
      </Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Button
          onPress={onClose}
          bgColor={colors.peach}
          style={{ maxWidth: 150 }}
        >
          Cancel
        </Button>
        <Button
          onPress={onConfirm}
          bgColor={colors.green}
          style={{ maxWidth: 150 }}
        >
          Confirm
        </Button>
      </View>
    </View>
  ) : (
    <Text></Text>
  );
};

export default Alert;
