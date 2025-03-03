import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const navigation = useNavigation();

  const favoriteMeals = MEALS.filter((mealItem) => {
    return favoriteMealsCtx.ids.includes(mealItem.id);
  });

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.text}>No favorite meals found.</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Categories")}>
          <Text style={styles.text}>Start adding some!</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.rootContainer}>
      <MealsList items={favoriteMeals} />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f2f25",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    marginTop: 20,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#e2b497",
  },
});
