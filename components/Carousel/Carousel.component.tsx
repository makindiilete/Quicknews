import React, { useState, ReactElement } from "react";
import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import SnapCarousel from "react-native-snap-carousel";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { DefaultText } from "../DefaultText/DefaultText.component";
import { Pagination } from "react-native-snap-carousel";
import { fontBold } from "../../constants/globalStyles";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

type TItem = {
  title: ReactElement;
  img: ImageSourcePropType;
  id: number;
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items: Array<TItem> = [
    {
      img: require("../../assets/imgs/breaking_news0.png"),
      id: 1,
      title: (
        <DefaultText style={{ ...styles.titleText, marginBottom: 20 }}>
          <DefaultText
            style={{
              ...styles.titleText,
              color: Colors.colorBackgroundDarkPurple,
            }}
          >
            Stay tune
          </DefaultText>{" "}
          to the latest news.
        </DefaultText>
      ),
    },
    {
      title: (
        <DefaultText style={{ ...styles.titleText, marginBottom: 20 }}>
          <DefaultText
            style={{
              ...styles.titleText,
              color: Colors.colorBackgroundDarkPurple,
            }}
          >
            Swipe down
          </DefaultText>{" "}
          to reload and get newer stories.
        </DefaultText>
      ),
      img: require("../../assets/imgs/breaking_news1.png"),
      id: 2,
    },
    {
      title: (
        <DefaultText style={{ ...styles.titleText, marginBottom: 20 }}>
          <DefaultText
            style={{
              ...styles.titleText,
              color: Colors.colorBackgroundDarkPurple,
            }}
          >
            Lazy load
          </DefaultText>{" "}
          your top stories.
        </DefaultText>
      ),
      img: require("../../assets/imgs/breaking_news2.jpg"),
      id: 3,
    },
  ];
  const renderItem = ({ item }: { item: TItem }) => {
    return (
      <View key={item.id} style={styles.slide}>
        <Image
          source={item.img}
          style={{
            resizeMode: "contain",
            height: hp("25%"),
            width: wp("100%"),
          }}
        />
      </View>
    );
  };

  let carousel;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <SnapCarousel
          layout="default"
          ref={(ref) => (carousel = ref)}
          data={items}
          sliderWidth={Layout.window.width}
          itemWidth={Layout.window.width}
          renderItem={renderItem}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={3000}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
          loop={true}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        <DefaultText style={styles.titleArea}>
          {items[activeIndex].title}
        </DefaultText>
      </View>

      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.bullets}
        dotStyle={styles.bullet}
        inactiveDotOpacity={0.75}
        inactiveDotScale={1}
        inactiveDotStyle={styles.inactiveBullet}
        dotContainerStyle={styles.dotContainer}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleArea: {
    textAlign: "center",
    width: "95%",
    maxWidth: "95%",
    minHeight: 100,
  },
  titleText: {
    ...fontBold,
    fontSize: 24,
    lineHeight: 30,
    color: Colors.colorPageGrey,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: Layout.window.width - 72,
    maxWidth: Layout.window.width - 72,
  },
  slide: {
    width: "100%",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 110,
    flexGrow: 1,
  },

  // Pagination styles
  bullets: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 18,
    paddingBottom: 8,
  },
  bullet: {
    height: 4,
    width: 32,
    borderRadius: 20,
    backgroundColor: Colors.colorPagination,
    marginRight: 10,
  },
  inactiveBullet: {
    height: 5,
    width: 8,
    borderRadius: 20,
    backgroundColor: "#BAC2C9",
    marginRight: 10,
  },
  dotContainer: {
    marginHorizontal: 0,
  },
});
