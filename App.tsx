import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'

export default function App() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff"
    }}>
      <Text style={{ color: "red" }}>{date + ""}</Text>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  )
}