import React from "react";
import { View, Text, FlatList } from "react-native";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import { ActivityIndicator } from "react-native-web";

import useFetch from '../../../hooks/useFetch';

const Popularjobs = () => {

const { isLoading, error , data} = useFetch (
  'search',
  {
    query : "React developer",
    num_pages: 1
  }
)

console.log("DDD", data);

  // const isLoading = false;    -- isLoading and error will now come dynamically from usefetch hook (above)
  // const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <Text style={styles.headerBtn}>Show all</Text>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something is wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
