import React, { useCallback, useImperativeHandle } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

type BottomSheetProps = {}
export type BottomSheetRefProps = {
    scrollTo: (destination: number) => void;
    isActive: () => boolean;
}

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;
const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(({ }, ref) => {
    const translateY = useSharedValue(0)
    const context = useSharedValue({ y: 0 })
    const active = useSharedValue(false)

    const isActive = useCallback(() => {
        return active.value
    }, [])

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), []);



    React.useEffect(() => {
        scrollTo(-SCREEN_HEIGHT / 3)
    }, [])


    const scrollTo = React.useCallback((destination: number) => {
        "worklet";

        active.value = destination !== 0;

        translateY.value = withSpring(destination, { damping: 50 })
    }, [])

    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value }
        })
        .onUpdate((event) => {
            const y = event.translationY + context.value.y;
            translateY.value = y;
            translateY.value = Math.max(y, MAX_TRANSLATE_Y);
        })
        .onEnd(() => {
            console.log(translateY)
            if (translateY.value > -SCREEN_HEIGHT / 3) {
                scrollTo(0)
            } else if (translateY.value < - SCREEN_HEIGHT / 2) {
                scrollTo(MAX_TRANSLATE_Y)
            }
        })

    const viewAnimatedStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(translateY.value, [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y], [25, 5], Extrapolate.CLAMP);
        return {
            transform: [{
                translateY: translateY.value
            }],
            borderRadius
        }
    })



    return (
        <Animated.View style={[styles.container, viewAnimatedStyle]}>
            <GestureDetector gesture={gesture} >
                <View style={styles.line}
                    hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }}
                />
            </GestureDetector>
        </Animated.View>
    )
})

export default BottomSheet

const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: "white",
        position: "absolute",
        top: SCREEN_HEIGHT,
        borderRadius: 25
    },
    line: {
        width: 75,
        height: 20,
        backgroundColor: "gray",
        alignSelf: "center",
        marginVertical: 15,
        borderRadius: 2
    },
    hitSop: {
        top: 25,
        bottom: 25
    }
})