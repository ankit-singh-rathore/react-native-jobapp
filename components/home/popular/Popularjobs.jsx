import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";

import useFetch from '../../../hooks/useFetch';
import { useRouter } from "expo-router";

const Popularjobs = () => {
  const router = useRouter();

const { isLoading, error , data} = useFetch (
  'search',
  {
    query : "React developer",
    num_pages: 1
  }
)

console.log(data);

  // const isLoading = false;    -- isLoading and error will now come dynamically from usefetch hook (above) | data will be used in FlatList
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
            data={data}
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
