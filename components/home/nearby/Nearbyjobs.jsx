import { View, Text, ActivityIndicator } from "react-native";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { useRouter } from "expo-router";
import useFetch from "../../../hooks/useFetch";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  console.log("DATA", data);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NearBy Jobs</Text>
        <Text style={styles.headerBtn}>Show all</Text>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something is wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard 
            job={job}
            key={`nearby-job-${job?.job_id}`}
            handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
