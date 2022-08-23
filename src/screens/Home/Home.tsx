import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from "@react-navigation/native"

const Home = () => {
    const navigation = useNavigation()
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <View>
            <Text style={tw`text-green-400 `}>Hello</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})