import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const visibleRoutes = ["index", "search", "player", "create", "library"];

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const routes = state.routes.filter((route) => visibleRoutes.includes(route.name));

  return (
    <View style={styles.wrapper}>
      <View style={styles.tabBar}>
        {routes.map((route) => {
          const routeIndex = state.routes.findIndex((r) => r.key === route.key);
          const isFocused = state.index === routeIndex;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          let icon = null;

          if (route.name === "index") {
            icon = (
              <Ionicons
                name="home-outline"
                size={28}
                color={isFocused ? "#FF4FD8" : "#F5F5F5"}
              />
            );
          }

          if (route.name === "search") {
            icon = (
              <Feather
                name="search"
                size={28}
                color={isFocused ? "#FF4FD8" : "#F5F5F5"}
              />
            );
          }

          if (route.name === "player") {
            icon = (
              <Ionicons
                name="play-circle-outline"
                size={42}
                color="#F5F5F5"
              />
            );
          }

          if (route.name === "create") {
            icon = (
              <Feather
                name="plus"
                size={30}
                color={isFocused ? "#FF4FD8" : "#F5F5F5"}
              />
            );
          }

          if (route.name === "library") {
            icon = (
              <Ionicons
                name="folder-open-outline"
                size={28}
                color={isFocused ? "#FF4FD8" : "#F5F5F5"}
              />
            );
          }

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityLabel={descriptors[route.key]?.options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={styles.tabButton}
              activeOpacity={0.8}
            >
              {icon}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 24,
  },
  tabBar: {
    height: 88,
    backgroundColor: "#05050A",
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#D946EF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  tabButton: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});