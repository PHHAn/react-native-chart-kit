import React, { useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { BarChart } from "react-native-chart-kit";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const BAR_ITEM_WIDTH = 50;

export default function DummyScreen() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Bar Chart</Text>
      <ScrollView horizontal>
        <BarChart
          showBarTops={false}
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          withHorizontalLabels={false}
          width={BAR_ITEM_WIDTH * 10} // from react-native
          height={300}
          fromZero
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            selectable: true,
            barRadius: 8,
            // backgroundGradientFrom: '#f1f4f8',
            // backgroundGradientTo: '#f1f4f8',
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            decimalPlaces: 2, // optional, defaults to 2dp
            fillShadowGradientOpacity: 1,
            fillShadowGradient: `#2368e2`,
            inActiveFillShadowGradient: "#ccd6e8",
            color: (opacity) => `rgba(34, 102, 226, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
            // propsForBackgroundLines: {
            //   stroke: 'transparent',
            // },
            barPercentage: 0.75,
            useShadowColorFromDataset: false,
          }}
          onPress={(value) => console.log(">>>>>>CHECK VALUE<<<<<<", value)}
          withInnerLines={false}
          style={{
            marginVertical: 8,
            paddingRight: 0,
          }}
        />
      </ScrollView>
    </View>
  );
}
