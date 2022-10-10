import Colors from "./Colors";
import { StyleSheet, TextStyle } from "react-native";
import Layout from "./Layout";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const fontBold: TextStyle = {
  fontWeight: "bold",
  fontFamily: "font-bold",
};
export const fontSemiBold: TextStyle = {
  fontWeight: "500",
  fontFamily: "font-medium",
};

export const horizontalSpace = 16;

export default StyleSheet.create({
  pageTitle: {
    fontSize: 32,
    color: Colors.colorPageBlack,
    marginBottom: 10,
    ...fontBold,
  },
  pageTitleInfo: {
    ...fontBold,
    color: "#505D67",
    fontSize: 20,
    lineHeight: 24,
  },
  pageTitleArea: {
    marginBottom: 20,
  },
  subTitle: {
    ...fontBold,
    marginBottom: 10,
    color: Colors.colorPageBlack,
    fontSize: 24,
    lineHeight: 30,
  },
  fontBold: fontBold,
  buttonStyle: {
    ...fontBold,
    color: Colors.colorWhite,
    fontSize: 16,
  },
  buttonWhite: {
    backgroundColor: Colors.colorWhite,
    borderWidth: 1,
    borderColor: Colors.buttonPurple,
  },
  buttonStyleWhite: {
    color: Colors.buttonPurple,
    ...fontBold,
  },
  alignAuthPagesContent: {
    paddingHorizontal: horizontalSpace,
    paddingTop: Layout.window.height / 40,
    paddingBottom: Layout.isSmallDevice ? 48 : 80,
    // flex: 1,
    flexDirection: "column",
    // minHeight: Layout.window.height,
  },
  realignAuthBottom: {
    marginBottom: Layout.isSmallDevice ? 0 : -32, // 80 - 48 in alignAuthPagesContent style above
  },
  alignAppPagesContent: {
    flex: 1,
    paddingHorizontal: horizontalSpace,
    paddingTop: Layout.window.height / 15,
    paddingBottom: 10,
  },
  authPagesBottomContent: {
    flex: 1,
    justifyContent: "flex-end",
  },
  infoText: {
    lineHeight: 24,
    fontSize: 16,
    color: "#505D67",
    marginBottom: 24,
  },
  alignLabel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fieldLabel: {
    ...fontBold,
    fontSize: 12,
    color: "#81909D",
    marginBottom: 0,
  },
  extraFieldLabel: {
    color: Colors.colorRed,
    fontSize: 12,
    textAlign: "right",
  },
  alignResendOtp: {
    marginTop: 16,
  },
  resendOtp: {
    fontSize: 14,
    textAlign: "center",
    width: "100%",
    maxWidth: "100%",
  },
  otpText: {
    color: Colors.buttonPurple,
    fontSize: 14,
  },
  formArea: {
    marginTop: 10,
    marginBottom: 20,
  },
  pinLabel: {
    ...fontBold,
    fontSize: 16,
    lineHeight: 25,
    color: Colors.colorPageBlack,
    marginBottom: 10,
    textAlign: "center",
  },
  containTableData: {
    maxHeight: Layout.window.height / 2,
  },
  alignHorizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
  },
  gridTwo: {
    minWidth: "48%",
    maxWidth: "48%",
  },
  gridThree: {
    minWidth: "30%",
    maxWidth: "30%",
  },
  errorContainer: {
    paddingVertical: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    ...fontBold,
    color: Colors.colorRed,
    textAlign: "center",
  },
  alignToggleTab: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 16,
  },
  noTableDateImage: {
    maxWidth: "100%",
  },
  powerbiEmbedContainer: {
    height: "500px",
    width: "100%",
    padding: 0,
    margin: 0,
  },
  dialCodeField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  leftDialCodeField: {
    flex: 0.3,
  },
  rightDialCodeField: {
    flex: 0.675,
  },
  sizedBox1: {
    height: hp("3%"),
    width: wp("100%"),
  },
});
