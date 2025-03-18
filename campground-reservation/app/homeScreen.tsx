import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ImageBackground, Text, Platform, Modal, Button, useWindowDimensions } from "react-native";
import { myStyles as styles } from "../styles/styles";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView, Pressable } from "react-native-gesture-handler";
import Title from "@/components/Title";
import NavButton from "@/components/NavButton";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import WheelPicker from "react-native-wheely";

interface HomeScreenProps {
    onNext: () => void;
}

SplashScreen.preventAutoHideAsync();

const HomeScreen: React.FC<HomeScreenProps> = ({ onNext }) => {
    const insets = useSafeAreaInsets();
    const [checkIn, setCheckIn] = useState(new Date());
    const [showCheckIn, setShowCheckIn] = useState(false);

    function showCheckInPicker() {
        setShowCheckIn(true);
    }

    function hideCheckInPicker() {
        setShowCheckIn(false);
    }

    function onChangeCheckIn(_event: any, selectedDate?: Date) {
        if (!selectedDate) return;
        const currentDate = selectedDate;

        if (Platform.OS === "android") {
            hideCheckInPicker();
        }

        setCheckIn(currentDate);
    }

    const [checkOut, setCheckOut] = useState(new Date());
    const [showCheckOut, setShowCheckOut] = useState(false);

    function showCheckOutPicker() {
        setShowCheckOut(true);
    }

    function hideCheckOutPicker() {
        setShowCheckOut(false);
    }

    function onChangeCheckOut(_event: any, selectedDate?: Date) {
        if (!selectedDate) return;
        const currentDate = selectedDate;

        if (Platform.OS === "android") {
            hideCheckOutPicker();
        }

        setCheckOut(currentDate);
    }

    const guestCounts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
    const [ numGuests, setNumGuests ] = useState(0);
    const [ showNumGuests, setShowNumGuests ] = useState(false);

    function showNumGuestsPicker() {
        setShowNumGuests(true);
    }

    function hideNumGuestsPicker() {
        setShowNumGuests(false);
    }

    function onChangeNumGuests(index: number) {
        setNumGuests(index)
    }

    const sitesCounts = ["1", "2", "3", "4", "5"];
    const [ numSites, setNumSites ] = useState(0);
    const [ showNumSites, setShowNumSites ] = useState(false);

    function showNumSitesPicker() {
        setShowNumSites(true);
    }

    function hideNumSitesPicker() {
        setShowNumSites(false);
    }

    function onChangeNumSites(index: number) {
        setNumSites(index)
    }

    const [ results, setResults ] = useState("");

    function onReserveHandler() {
        let res = `Check-In\t\t${checkIn.toDateString()}\n`
        res = res + `Check-Out\t\t${checkOut.toDateString()}\n`
        res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`
        res = res + `Number of Campsites:\t\t${sitesCounts[numSites]}\n`
        setResults(res);
    }

    const {width, height} = useWindowDimensions();

    const dateLabelFlex = {
        fontSize: width * 0.1,
    };
    
    const dateTextFlex = {
        fontSize: width * 0.04,
    };

    return (
        <>
            <ImageBackground
                source={require("../assets/images/camping.jpg")}
                resizeMode="cover"
                style={styles.rootContainer}
                imageStyle={styles.backgroundImage}
            >
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <SafeAreaView
                        style={[
                            styles.rootContainer,
                            {
                                paddingTop: insets.top,
                                paddingBottom: insets.bottom,
                                paddingLeft: insets.left,
                                paddingRight: insets.right,
                            },
                        ]}
                    >
                        <ScrollView style={styles.scrollContainer}>

                            <View style={styles.titleContainer}>
                                <Title>Starry Night</Title>
                            </View>

                            <View style={styles.rowContainer}>
                                <View style={styles.dateContainer}>
                                    <Text style={[styles.dateLabel1, dateLabelFlex]}>Check-In:</Text>
                                    <Pressable onPress={showCheckInPicker}>
                                        <Text style={[styles.dateText1, dateTextFlex]}>
                                            {checkIn.toDateString()}
                                        </Text>
                                    </Pressable>
                                </View>
                                <View style={styles.dateContainer}>
                                    <Text style={[styles.dateLabel1, dateLabelFlex]}>Check-Out:</Text>
                                    <Pressable onPress={showCheckOutPicker}>
                                        <Text style={[styles.dateText1, dateTextFlex]}>
                                            {checkOut.toDateString()}
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>

                            <View>
                                {showCheckIn && Platform.OS === "android" && (
                                    <DateTimePicker 
                                        testID="dateTimePickerCheckInAndroid"
                                        value={checkIn}
                                        mode="date"
                                        display="spinner"
                                        onChange={onChangeCheckIn}
                                    />
                                    
                                )}
                                {showCheckIn && Platform.OS === "ios" && (
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={showCheckIn}
                                    >
                                        <View style={styles.centeredModalView}>
                                            <View style={styles.modalView}>
                                                <DateTimePicker
                                                    testID="dateTimePickerCheckInIOS"
                                                    value={checkIn}
                                                    mode="date"
                                                    display="spinner"
                                                    onChange={onChangeCheckIn}
                                                />
                                                <Button 
                                                title="Confirm" 
                                                onPress={hideCheckInPicker} 
                                                />
                                            </View>
                                        </View>
                                    </Modal>
                                )}

                                    {showCheckOut && Platform.OS === "android" && (
                                        <DateTimePicker 
                                            testID="dateTimePickerCheckOutAndroid"
                                            value={checkOut}
                                            mode="date"
                                            display="spinner"
                                            onChange={onChangeCheckOut}
                                        />
                                    )}
                                    {showCheckOut && Platform.OS === "ios" && (
                                        <Modal
                                            animationType="slide"
                                            transparent={true}
                                            visible={showCheckOut}
                                            supportedOrientations={["portrait", "landscape"]}
                                        >
                                            <View style={styles.centeredModalView}>
                                                <View style={styles.modalView}>
                                                    <DateTimePicker
                                                        testID="dateTimePickerCheckOutIOS"
                                                        value={checkOut}
                                                        mode="date"
                                                        display="spinner"
                                                        onChange={onChangeCheckOut}
                                                    />
                                                    <Button 
                                                    title="Confirm" 
                                                    onPress={hideCheckOutPicker} 
                                                    />
                                                </View>
                                            </View>
                                        </Modal>
                                    )}
                                </View>

                                <View style={styles.dateContainer}>
                                <View style={styles.rowContainer}>
                                    <Text style={[styles.dateLabel2, dateLabelFlex]}>Guests:</Text>
                                    <Pressable onPress={showNumGuestsPicker}>
                                        <View style={styles.dataTextContainer}>
                                            <Text style={[styles.dateText2, dateTextFlex]}>
                                                {guestCounts[numGuests]}
                                            </Text>
                                        </View>
                                    </Pressable>

                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={showNumGuests}
                                        supportedOrientations={["portrait", "landscape"]}
                                    >
                                        <View style={styles.centeredModalView}>
                                            <View style={styles.modalView}>
                                                <Text style={[styles.dateText1, dateTextFlex]}>Guests:</Text>
                                                <WheelPicker 
                                                    selectedIndex={numGuests}
                                                    options={guestCounts}
                                                    onChange={onChangeNumGuests}
                                                    containerStyle={{ width: 200 }}
                                                />
                                                <Button title="Confirm" onPress={hideNumGuestsPicker}/>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>
                                </View>

                                <View style={styles.dateContainer}>
                                <View style={styles.rowContainer}>
                                    <Text style={[styles.dateLabel2, dateLabelFlex]}>Campsites:</Text>
                                    <Pressable onPress={showNumSitesPicker}>
                                        <View style={styles.dataTextContainer}>
                                            <Text style={[styles.dateText2, dateTextFlex]}>
                                                {sitesCounts[numSites]}
                                            </Text>
                                        </View>
                                    </Pressable>

                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={showNumSites}
                                        supportedOrientations={["portrait", "landscape"]}
                                    >
                                        <View style={styles.centeredModalView}>
                                            <View style={styles.modalView}>
                                                <Text style={[styles.dateText1, dateTextFlex]}>Sites:</Text>
                                                <WheelPicker 
                                                    selectedIndex={numSites}
                                                    options={sitesCounts}
                                                    onChange={onChangeNumSites}
                                                    containerStyle={{ width: 200 }}
                                                />
                                                <Button title="Confirm" onPress={hideNumSitesPicker}/>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>
                                </View>

                            <View style={styles.navbuttonContainer}>
                                <NavButton onNext={onReserveHandler}>Reserve Now</NavButton>
                            </View>

                            <View style={styles.resultsContainer}>
                                <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
                            </View>

                        </ScrollView>

                    </SafeAreaView>
                </GestureHandlerRootView>
            </ImageBackground>
        </>
    );
};

export default HomeScreen;
