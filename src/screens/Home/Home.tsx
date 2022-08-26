import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames';

const Home = () => {
    const navigation = useNavigation()
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView>
            {/* Header */}

            <View style={tw`flex-row pb-3 items-center mx-4`}>
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    resizeMode={"contain"}
                    style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
                />
            </View>

            <View style={tw`mr-4`}>
                <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
                <Text>Current Location</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})