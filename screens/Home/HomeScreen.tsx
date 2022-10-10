import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  Linking,
} from "react-native";
import { AppScreen } from "../../components/AppScreen/AppScreen";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { AppFullSizedBox } from "../../components/AppFullSizedBox";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import Colors from "../../constants/Colors";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsAction } from "../../redux/actions/fetchNewsAction";

export function HomeScreen() {
  const news = useSelector((state: any) => state.fetchNewsReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [newsCount, setNewsCount] = useState(4);

  useFocusEffect(
    useCallback(() => {
      if (news?.data.length === 0) {
        dispatch(fetchNewsAction(false, newsCount));
      }
    }, [])
  );

  useEffect(() => {
    dispatch(fetchNewsAction(false, newsCount));
  }, [newsCount]);

  return (
    <AppScreen>
      <AppContainer>
        <AppFullSizedBox />
        {news?.loading ? (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: heightPercentageToDP(80),
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Loading news.....</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={news?.data}
              keyExtractor={(item) => item?.title.toString()}
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => {
                    dispatch(fetchNewsAction(true, newsCount));
                  }}
                />
              }
              renderItem={({ item, index }) => {
                return (
                  <>
                    <Card onPress={() => Linking.openURL(item?.url)}>
                      <Card.Content>
                        <Title style={{ color: Colors.colorDarkOrange }}>
                          {`#${index + 1}`} - {item?.title}
                        </Title>
                        <Paragraph>{item?.url}</Paragraph>
                      </Card.Content>
                      <Card.Actions>
                        <Button>READ</Button>
                      </Card.Actions>
                    </Card>
                    <AppFullSizedBox />
                    {index + 1 === newsCount && (
                      <>
                        <Button
                          mode="contained"
                          onPress={() => {
                            setNewsCount(newsCount + 4);
                          }}
                        >
                          <Text style={{ color: "#fff", fontWeight: "700" }}>
                            FETCH MORE
                          </Text>
                        </Button>
                        <AppFullSizedBox />
                        <AppFullSizedBox />
                      </>
                    )}
                  </>
                );
              }}
            />
            <AppFullSizedBox />
          </>
        )}
      </AppContainer>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
