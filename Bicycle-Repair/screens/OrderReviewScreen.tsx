import React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
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

interface OrderReviewProps {
  services: ServiceOption[];
  repairTime: RepairTimeOption;
  newsletter: boolean;
  rentalMembership: boolean;
  totalPrice: number;
  returnHome: () => void;
}

const OrderReviewScreen: React.FC<OrderReviewProps> = ({
  services,
  repairTime,
  newsletter,
  rentalMembership,
  totalPrice,
  returnHome,
}) => {
  const salesTax = totalPrice * 0.06;
  const finalTotal = totalPrice + salesTax;

  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Order Review</Text>

        <Text style={styles.sectionTitle}>Selected Repair Time:</Text>
        <Text style={styles.detailText}>
          {repairTime.label} - ${repairTime.price}
        </Text>

        <Text style={styles.sectionTitle}>Selected Services:</Text>
        {services.filter((service) => service.value).length > 0 ? (
          services
            .filter((service) => service.value)
            .map((service) => (
              <Text key={service.id} style={styles.detailText}>
                {service.name} - ${service.price}
              </Text>
            ))
        ) : (
          <Text style={styles.detailText}>No services selected.</Text>
        )}

        <Text style={styles.sectionTitle}>Additional Options:</Text>
        {newsletter && <Text style={styles.detailText}>✔ Newsletter Signup (Free)</Text>}
        {rentalMembership && <Text style={styles.detailText}>✔ Rental Membership ($100)</Text>}


        <Text style={styles.sectionTitle}>Price Breakdown:</Text>
        <Text style={styles.detailText}>Subtotal: ${totalPrice.toFixed(2)}</Text>
        <Text style={styles.detailText}>Sales Tax (6%): ${salesTax.toFixed(2)}</Text>
        <Text style={styles.totalPrice}>Final Total: ${finalTotal.toFixed(2)}</Text>

        <Button title="Return Home" onPress={returnHome} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
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
    color: "white",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    color: "white",
  },
  detailText: {
    fontSize: 16,
    marginLeft: 10,
    color: "white",
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "yellow",
  },
});

export default OrderReviewScreen;
