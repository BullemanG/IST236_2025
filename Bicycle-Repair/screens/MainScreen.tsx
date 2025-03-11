import React from "react";
import { View, Text, Button, Switch, ScrollView, StyleSheet, ImageBackground } from "react-native";
import { RadioButton } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

interface ServiceOption {
  id: number;
  name: string;
  value: boolean;
  price: number;
}

interface RepairTimeOption {
  id: string;
  label: string;
  value: string;
  price: number;
}

interface MainScreenProps {
  repairTimeRadioButtons: RepairTimeOption[];
  repairTimeId: number;
  setRepairTimeId: (id: number) => void;
  services: ServiceOption[];
  setServices: (services: ServiceOption[]) => void;
  newsletter: boolean;
  setNewsletter: (value: boolean) => void;
  rentalMembership: boolean;
  setRentalMembership: (value: boolean) => void;
  calculateTotalPrice: () => void;
}

const MainScreen: React.FC<MainScreenProps> = ({
  repairTimeRadioButtons,
  repairTimeId,
  setRepairTimeId,
  services,
  setServices,
  newsletter,
  setNewsletter,
  rentalMembership,
  setRentalMembership,
  calculateTotalPrice,
}) => {
  return (
    <ImageBackground source={require("../assets/images/background.jpg")} style={styles.background}>
      <LinearGradient colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.6)"]} style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Bicycle Repair Shop</Text>

            <Text style={styles.sectionTitle}>Select Repair Time:</Text>
            {repairTimeRadioButtons.map((option, index) => (
              <View key={option.id} style={styles.radioContainer}>
                <RadioButton
                  value={option.value}
                  status={repairTimeId === index ? "checked" : "unchecked"}
                  onPress={() => setRepairTimeId(index)}
                />
                <Text style={styles.label}>{option.label} - ${option.price}</Text>
              </View>
            ))}

            <Text style={styles.sectionTitle}>Select Services:</Text>
            {services.map((service, index) => (
              <View key={service.id} style={styles.checkboxContainer}>
                <Switch
                  value={service.value}
                  onValueChange={() => {
                    const updatedServices = [...services];
                    updatedServices[index].value = !updatedServices[index].value;
                    setServices(updatedServices);
                  }}
                />
                <Text style={styles.label}>{service.name} - ${service.price}</Text>
              </View>
            ))}

            <Text style={styles.sectionTitle}>Additional Options:</Text>
            <View style={styles.switchContainer}>
              <Text style={styles.label}>Newsletter Signup</Text>
              <Switch value={newsletter} onValueChange={setNewsletter} />
            </View>

            <View style={styles.switchContainer}>
              <Text style={styles.label}>Rental Membership ($100)</Text>
              <Switch value={rentalMembership} onValueChange={setRentalMembership} />
            </View>

            <Button title="Submit Order" onPress={calculateTotalPrice} />
          </View>
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    resizeMode: "cover",
  },
  overlay: {
    flex: 1, 
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: "center",
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FFFFFF",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    color: "#FFFFFF",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
    color: "#FFFFFF",
  },
});

export default MainScreen;
