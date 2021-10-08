import React, { useState } from "react";
import { View } from "react-native";
import { Header, Input, FormOutput } from "../components";

export const Home = ({}) => {
  const [formData, setFormData] = useState();
  return (
    <View>
      <Header title={"Home"} />
      <Input setFormData={setFormData} />
      <FormOutput formData={formData} />
    </View>
  );
};
