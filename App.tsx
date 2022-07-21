import React from 'react';
import { View, Text } from 'react-native'

import Video from 'react-native-video'

function VideoComponent() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: "#333", fontSize: 20 }}>Hello Video</Text>
      <Video
        controls
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }}
        paused={false}
        style={{
          width: 400,
          height: 400
        }}
      />
    </View>
  )
}

export default function App() {
  return (
    <>
      <VideoComponent />
    </>
  );
}
