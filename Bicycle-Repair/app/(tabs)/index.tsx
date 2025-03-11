import React, { useState, useMemo } from "react";
import { View, StyleSheet } from "react-native"; 
import HomeScreen from "../../screens/MainScreen";
import OrderReviewScreen from "../../screens/OrderReviewScreen";

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

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<"home" | "orderReview">("home");
  const [currentPrice, setCurrentPrice] = useState<number>(0);

  const repairTimeRadioButtons: RepairTimeOption[] = useMemo(
    () => [
      { id: "0", label: "Standard", value: "Standard", price: 0 },
      { id: "1", label: "Expedited", value: "Expedited", price: 50 },
      { id: "2", label: "Next Day", value: "Next Day", price: 100 },
    ],
    []
  );

  const [repairTimeId, setRepairTimeId] = useState<number>(0);
  const [services, setServices] = useState<ServiceOption[]>([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState<boolean>(false);
  const [rentalMembership, setRentalMembership] = useState<boolean>(false);

  const calculateTotalPrice = () => {
    let totalPrice = repairTimeRadioButtons[repairTimeId].price;

    services.forEach((service) => {
      if (service.value) {
        totalPrice += service.price;
      }
    });

    if (rentalMembership) {
      totalPrice += 100;
    }

    setCurrentPrice(totalPrice);
    setCurrentScreen("orderReview");
  };

  const returnHome = () => {
    setCurrentPrice(0);
    setCurrentScreen("home");
    resetOptions();
  };

  const resetOptions = () => {
    setRepairTimeId(0);
    setServices((prevServices) =>
      prevServices.map((service) => ({ ...service, value: false }))
    );
    setNewsletter(false);
    setRentalMembership(false);
  };

  return (
    <View style={styles.container}>
      {currentScreen === "home" && (
        <HomeScreen
          repairTimeRadioButtons={repairTimeRadioButtons}
          repairTimeId={repairTimeId}
          setRepairTimeId={setRepairTimeId}
          services={services}
          setServices={setServices}
          newsletter={newsletter}
          setNewsletter={setNewsletter}
          rentalMembership={rentalMembership}
          setRentalMembership={setRentalMembership}
          calculateTotalPrice={calculateTotalPrice}
        />
      )}

      {currentScreen === "orderReview" && (
        <OrderReviewScreen
          services={services}
          repairTime={repairTimeRadioButtons[repairTimeId]}
          newsletter={newsletter}
          rentalMembership={rentalMembership}
          totalPrice={currentPrice}
          returnHome={returnHome}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
